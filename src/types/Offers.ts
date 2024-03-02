export interface OffersPayload {
    loanPurpose: string;
    amount: number | undefined;
    terms: number;
  }
  export interface OffersResponse {
    id: string;
    monthlyPayments: number;
    apr: number;
  }
  export interface SubmissionsPayload {
    loanPurpose: string;
    amount: number;
    terms: number;
    offerId: string;
  }
  export interface SubmissionsResponse {
    userId: string;
  }