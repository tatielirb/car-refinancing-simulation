export interface OffersPayload {
    loanPurpose: string;
    amount: number;
    terms: number;
  }
  export interface OffersResponse {
    id: string;
    monthlyPayments: number;
    apr: number;
  }