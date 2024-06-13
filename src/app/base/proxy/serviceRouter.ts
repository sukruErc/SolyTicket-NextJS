export class ServiceRouter {
  public static getAuthenticateUrl = (): string => {
    return `${ServiceRouter.getServiceUrl()}auth/login`;
  };

  public static getLogoutUrl = (): string => {
    return `${ServiceRouter.getServiceUrl()}authwithsession/logout`;
  };

  public static getServiceUrl = (): string => {
    // return process.env.NEXT_PUBLIC_ENDPOINT_BASE!;
    // return "http://localhost:7113/api/";

    return "https://cosmorateapi.stoneity.com/api/";
  };
}
