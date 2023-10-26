// 이 함수는 JS 객체를 인수로 받습니다
// 객체는 다음 속성을 포함해야 합니다
// - initialInvestment: 초기 투자 금액
// - annualInvestment: 매년 투자하는 금액
// - expectedReturn: 예상 수익률 (연간)
// - duration: 투자 기간 (시간 프레임)

interface InvestmentInput {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

interface InvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: InvestmentInput): InvestmentResult[] {
  const annualData: InvestmentResult[] = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * expectedReturn;
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
    });
  }

  return annualData;
}

// 브라우저에서 제공되는 Intl API를 사용하여 포맷터 객체를 준비합니다
// 이 객체는 숫자를 통화로 포맷하는 데 사용할 수 있는 "format()" 메서드를 제공합니다
// 사용 예: formatter.format(1000) => 결과는 "$1,000"입니다
export const formatter: Intl.NumberFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
