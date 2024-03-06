export interface LoansAvailableResponse {
  loansAvailable: LoanAvailableData;
}

export interface LoanAvailableData {
  id: string;
  lender: string;
  apr: string;
  balance: number;
  monthlyPayments: number;
  remainingMonths: number;
  automobile: Automobile;
}

export interface Automobile {
  id: string;
  vin: string;
  year: string;
  make: string;
  model: string;
  mileage: number;
  imageSource: string;
}