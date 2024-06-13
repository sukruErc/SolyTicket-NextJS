export class ConfigHelper {
  public static COSMORATE_APP_ENV_NAME: string = 'COSMORATE_APP_ENV_NAME';
  public static COSMORATE_APP_LANG: string = 'COSMORATE_APP_LANG';
  public static COSMORATE_USER_TOKEN: string = 'COSMORATE_USER_TOKEN';
  public static COSMORATE_USER_REFRESH_TOKEN: string = 'COSMORATE_USER_REFRESH_TOKEN';
  public static COSMORATE_USER_TOKEN_CREATE_TIME: string = 'COSMORATE_USER_TOKEN_CREATE_TIME';
  public static COSMORATE_USER_DATA: string = 'COSMORATE_USER_DATA';
  public static COSMORATE_SELECTED_THEME: string = 'COSMORATE_SELECTED_THEME';
  public static COSMORATE_ROLE_ID: string = 'COSMORATE_ROLE_ID';
  public static COSMORATE_IS_GET_TO_KNOW: string = 'COSMORATE_IS_GET_TO_KNOW';
}

export class Pattern {
  public static NUMERIC: string = '[0-9]*';
  public static ALPHABETIC: string = '[a-zA-ZğüşöçİĞÜŞÖÇ]+';
  public static ALPHABETIC_WITH_SPACES: string = '[a-zA-ZğüşöçİĞÜŞÖÇ ]+';
  public static ALPHABETIC_LOWERCASE: string = '[a-zğüşöçİĞÜŞÖÇ]+';
  public static ALPHABETIC_LOWERCASE_WITH_SPACES: string = '[a-zğüşöçİĞÜŞÖÇ ]+';
  public static ALPHABETIC_UPPERCASE: string = '[A-ZğüşöçİĞÜŞÖÇ]+';
  public static ALPHABETIC_UPPERCASE_WITH_SPACES: string = '[A-ZğüşöçİĞÜŞÖÇ ]+';
  public static ALPHANUMERIC: string = '[a-zA-Z0-9ğüşöçİĞÜŞÖÇ]+';
  public static ALPHANUMERIC_WITH_SPACES: string = '[a-zA-Z0-9ğüşöçİĞÜŞÖÇ ]+';
  public static ALPHANUMERIC_LOWERCASE: string = '[a-z0-9ğüşöçİĞÜŞÖÇ]+';
  public static ALPHANUMERIC_LOWERCASE_WITH_SPACES: string = '[a-z0-9ğüşöçİĞÜŞÖÇ ]+';
  public static ALPHANUMERIC_UPPERCASE: string = '[A-Z0-9ğüşöçİĞÜŞÖÇ]+';
  public static ALPHANUMERIC_UPPERCASE_WITH_SPACES: string = '[A-Z0-9ğüşöçİĞÜŞÖÇ ]+';
  public static EMAIL: string = '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$';
  public static PRICE: string = '[0-9]+(\\.[0-9][0-9]?)?';
}