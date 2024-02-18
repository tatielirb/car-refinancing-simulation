import { BaseClient } from "clients/BaseClient";
import { AxiosRequestConfig } from "axios";

export class DataAPiClient extends BaseClient {
  constructor() {
    super(
      process.env.REACT_APP_URL_API as string,
      (config: AxiosRequestConfig): AxiosRequestConfig => {
        config.headers = {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        };
        return config;
      }
    );
  }
}

export default new DataAPiClient();