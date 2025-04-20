export interface EnvironmentModel {
  readonly NODE_ENV: string;
  readonly PORT: number;
  readonly COOKIE_DOMAIN?: string;
  readonly FRONT_END_URL?: string;
  readonly MAIL_ID?: string;
  readonly MAIL_PASSWORD?: string;
  readonly MAIL_OWNER?: string;
}

export interface ConfigModel {
  readonly env: EnvironmentModel;
}
