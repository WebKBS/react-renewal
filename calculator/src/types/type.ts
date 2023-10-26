// types/type.ts 파일

export interface InvestmentData {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface InputChangeHandler {
  onChange: (inputIdentifier: string, newValue: number) => void;
}
