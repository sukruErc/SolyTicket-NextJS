import { ClientProxy } from "../base/proxy/clientProxy";
import { IRequesterInfo } from "../base/models";
import { ApiResponse } from "../base/models/common-models";

export class AuthApi extends ClientProxy {
  constructor(requesterInfo: IRequesterInfo) {
    super({
      url: "Authentication",
      requesterInfo,
    });
  }

  public async createAccount(
    data: CreateAccountModels
  ): Promise<ApiResponse<CreateAccountResponse>> {
    this.props.url = "users/signup";
    return await this.postAsync<ApiResponse<CreateAccountResponse>>(data);
  }

  public async login(
    data: LoginModel
  ): Promise<ApiResponse<CreateAccountResponse>> {
    this.props.url = "users/login";
    return await this.postAsync<ApiResponse<CreateAccountResponse>>(data);
  }

  public async verifyAccount(
    userId: string,
    code: string
  ): Promise<ApiResponse<verifyResponse>> {
    this.props.url = "users/verify";
    return await this.postAsync<ApiResponse<verifyResponse>>({ userId, code });
  }

  public async requestPasswordReset(
    email: string
  ): Promise<ApiResponse<resetPassRequestResponse>> {
    this.props.url = "users/request-password-reset";
    return await this.postAsync<ApiResponse<resetPassRequestResponse>>({
      email,
    });
  }

  public async resetPassword(
    email: string,
    token: string,
    newPassword: string
  ): Promise<ApiResponse<CreateAccountResponse>> {
    this.props.url = "users/reset-password";
    return await this.postAsync<ApiResponse<CreateAccountResponse>>({
      email,
      token,
      newPassword,
    });
  }
}
