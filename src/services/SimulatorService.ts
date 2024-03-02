import DataAPiClient from "clients/DataApiClient";
import {
  OffersPayload,
  OffersResponse,
  SubmissionsPayload,
  SubmissionsResponse,
} from "types/Offers";

import { LoansAvailableResponse } from "types/Loans";

export default {
  async postOffersInfo(form: OffersPayload): Promise<OffersResponse> {
    return await DataAPiClient.post<OffersResponse>("/offers", form);
  },
  async postSubmissions(
    data: SubmissionsPayload
  ): Promise<SubmissionsResponse> {
    return await DataAPiClient.post<SubmissionsResponse>("/submissions", data);
  },
  async getLoansAvailable(userId: string): Promise<LoansAvailableResponse> {
    return await DataAPiClient.get<LoansAvailableResponse>(
      `/loans?userId=${userId}`
    );
  },
};
