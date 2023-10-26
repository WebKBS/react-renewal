import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { InvestmentData } from "./types/type";

export default function App() {
  const [investmentData, setInvestmentData] = useState<InvestmentData>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier: string, newValue: number) {
    setInvestmentData((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={investmentData} />
      <Results input={investmentData} />
    </>
  );
}
