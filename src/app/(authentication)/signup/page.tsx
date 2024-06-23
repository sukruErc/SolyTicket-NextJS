"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Logo from "@/app/assets/svg/solyticket_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";
import { AuthApi } from "@/app/api/authentication";
import { ClientStorage } from "@/app/base/storage";
import { ConfigHelper } from "@/app/base/constants";
import { useRouter } from "next/navigation";
import { withoutToken } from "@/app/hoc/withoutToken";
import { jwtDecode } from "jwt-decode";

// import ReCAPTCHA from "react-google-recaptcha"; // Uncomment if you are using ReCAPTCHA

interface FormModel {
  name: string;
  email: string;
  phone: string;
  birthday: string;
  role: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [formData, setFormData] = useState<FormModel>({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    role: "CUSTOMER",
    password: "",
    confirmPassword: "",
  });

  const [phoneError, setPhoneError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    const isFormValid =
      Object.values(formData).every((value) => value.trim() !== "") &&
      !phoneError &&
      !passwordError &&
      !confirmPasswordError;
    setIsFormValid(isFormValid);
  }, [formData, phoneError, passwordError, confirmPasswordError]);

  const formatPhoneNumber = (value: string): string => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, "");

    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;

    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}`;
    }

    if (phoneNumberLength < 9) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )} ${phoneNumber.slice(6, 8)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8, 10)}`;
  };

  const validatePassword = (password: string): string => {
    const minLength = 8;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

    if (password.length < minLength) {
      return `Şifre en az ${minLength} karakter uzunluğunda olmalıdır.`;
    }

    if (!regex.test(password)) {
      return "Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir.";
    }

    return "";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;

    if (id === "phone") {
      setFormData((prevState) => ({
        ...prevState,
        phone: formatPhoneNumber(value),
      }));

      const formattedValue = formatPhoneNumber(value);
      if (formattedValue.replace(/[^\d]/g, "").length !== 10) {
        setPhoneError("Telefon numarası geçersiz.");
      } else {
        setPhoneError("");
      }
    } else if (id === "password") {
      const error = validatePassword(value);
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
      setPasswordError(error);
    } else if (id === "confirmPassword") {
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    } else if (id === "birthday") {
      const formattedDate = new Date(value).toISOString();
      setFormData((prevState) => ({
        ...prevState,
        birthday: formattedDate,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const startVerificationModal = async (userId: string) => {
    let timerInterval: NodeJS.Timeout;
    const { value: verificationCode } = await Swal.fire({
      title: "Doğrulama Kodu Girin",
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Doğrulama Kodu">
        <br>
        <div>Kalan süre: <span id="swal-timer">180</span> saniye</div>
        <div id="swal-timer-bar" style="background: #4E43F1; height: 5px; width: 100%;"></div>
      `,
      showCancelButton: true,
      confirmButtonText: "Doğrula",
      cancelButtonText: "İptal",
      didOpen: () => {
        const content = Swal.getHtmlContainer();
        if (content) {
          const timerSpan = content.querySelector(
            "#swal-timer"
          ) as HTMLSpanElement;
          const timerBar = content.querySelector(
            "#swal-timer-bar"
          ) as HTMLDivElement;
          let timeLeft = 180;

          timerInterval = setInterval(() => {
            timeLeft--;
            if (timerSpan) timerSpan.textContent = timeLeft.toString();
            if (timerBar) timerBar.style.width = `${(timeLeft / 180) * 100}%`;

            if (timeLeft <= 0) {
              clearInterval(timerInterval);
            }
          }, 1000);
        }
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
      preConfirm: async () => {
        const code = (
          document.getElementById("swal-input1") as HTMLInputElement
        ).value;
        const authApi = new AuthApi({});
        const res = await authApi.verifyAccount(userId, code);
        if (!res.success) {
          Swal.showValidationMessage(
            "Doğrulama başarısız oldu. Lütfen tekrar deneyin."
          );
        }
        const token = res.data as any;
        const decoded: any = jwtDecode(token);

        ClientStorage.setItem(ConfigHelper.SOLY_USER_ROLE, decoded.role);
        ClientStorage.setItem(
          ConfigHelper.SOLY_USER_TOKEN_CREATE_TIME,
          new Date().getTime()
        );
        ClientStorage.setItem(ConfigHelper.SOLY_USERNAME, decoded.name);

        ClientStorage.setItem(ConfigHelper.SOLY_USER_ID, decoded.userId);
        router.push("/");
        return res;
      },
    });

    if (verificationCode) {
      Swal.fire("Başarılı!", "Hesabınız doğrulandı.", "success");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setConfirmPasswordError("Şifreler eşleşmiyor.");
      return;
    } else {
      setConfirmPasswordError("");
    }

    if (!isFormValid) {
      alert("Lütfen tüm alanları doğru bir şekilde doldurun.");
      return;
    }
    const req: CreateAccountModels = {
      birthday: formData.birthday,
      email: formData.email,
      name: formData.name,
      password: formData.password,
      phone: formData.phone,
      role: formData.role,
    };
    const authApi = new AuthApi({});
    const res = await authApi.createAccount(req);
    if (res.success && res.data?.userId) {
      startVerificationModal(res.data.userId);
    }
  };

  return (
    <>
      <div className="container mx-auto flex justify-center px-5 my-5 sm:my-20">
        <div className="bg-[#F6F6FE] rounded-[26px] w-full md:w-9/12 lg:w-6/12">
          <div className="px-6 sm:px-16 py-20 text-center mx-auto">
            <div>
              <Image src={Logo} alt="" className="block" />
            </div>
            <h5>Hesabınızı Kaydedin</h5>

            <form onSubmit={handleSubmit} className="text-start my-8">
              <div className="mb-5">
                <h6>
                  <label htmlFor="name" className="form-label">
                    Ad Soyad
                  </label>
                </h6>
                <input
                  type="text"
                  className="newInput"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ad Soyad"
                  required
                />
              </div>
              <div className="mb-5">
                <h6>
                  <label htmlFor="email" className="form-label">
                    E-posta
                  </label>
                </h6>
                <input
                  type="email"
                  className="newInput"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Kullanıcı adı veya e-posta"
                  required
                />
              </div>
              <div className="mb-5">
                <h6>
                  <label htmlFor="phone" className="form-label">
                    Telefon
                  </label>
                </h6>
                <input
                  type="text"
                  className="newInput"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 555 55 55"
                  maxLength={15}
                  required
                />
                {phoneError && (
                  <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                )}
              </div>
              <div className="mb-5">
                <h6>
                  <label htmlFor="birthday" className="form-label">
                    Doğum Tarihi
                  </label>
                </h6>
                <input
                  type="date"
                  className="newInput"
                  id="birthday"
                  value={formData.birthday.split("T")[0]}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <h6>
                  <label htmlFor="password" className="form-label">
                    Şifre
                  </label>
                </h6>
                <input
                  type="password"
                  className="newInput"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Şifre"
                  required
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
              </div>
              <div className="mb-5">
                <h6>
                  <label htmlFor="confirmPassword" className="form-label">
                    Şifreyi Onaylayın
                  </label>
                </h6>
                <input
                  type="password"
                  className="newInput"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Şifre"
                  required
                />
                {confirmPasswordError && (
                  <p className="text-red-500 text-sm mt-1">
                    {confirmPasswordError}
                  </p>
                )}
              </div>
              {/* <div className="mb-5">
                <ReCAPTCHA
                  sitekey="6LckaPkpAAAAAJKauNZBCuYIOBVYu8n3GgQ243Lb"
                  onChange={setCaptchaValue}
                />
              </div> */}
              <div className="my-8">
                <button
                  type="submit"
                  className={`BlueButton w-full ${
                    !isFormValid ? "bg-gray-400 cursor-not-allowed" : ""
                  }`}
                  disabled={!isFormValid}
                >
                  Kaydol
                </button>
              </div>
            </form>
            <div>
              {pathname !== "/login" && (
                <p>
                  Hesabınız yok mu?{" "}
                  <span className="font-bold">
                    <Link
                      className={`link ${
                        pathname === "/login" ? "active" : ""
                      }`}
                      href="/login"
                    >
                      Giriş Yap
                    </Link>
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withoutToken(Signup);
