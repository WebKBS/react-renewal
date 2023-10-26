import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { InvestmentData } from "./types/type";

export default function App() {
  const [userInput, setUserInput] = useState<InvestmentData>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier: string, newValue: number) {
    setUserInput((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">0 이하는 입력할 수 없습니다.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}
