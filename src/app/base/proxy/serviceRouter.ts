export class ServiceRouter {
  public static getAuthenticateUrl = (): string => {
    return `${getServiceUrl()}auth/login`;
  };

  public static getLogoutUrl = (): string => {
    return `${getServiceUrl()}authwithsession/logout`;
  };
}

export const getServiceUrl = (): string => {
  // return process.env.NEXT_PUBLIC_ENDPOINT_BASE!;
  if (typeof window === 'undefined') {
    return process.env.BACKEND_URL?.concat('/v1/') || 'http://backend-service:3500/v1/';
  }

  // return "http://localhost:3500/v1/";
  return process.env.NEXT_PUBLIC_ENDPOINT_BASE || '/api/v1/';

  // return "https://cosmorateapi.stoneity.com/api/";
};
