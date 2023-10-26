import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier: string, newValue: number) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">초기 투자</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">연간 투자</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", Number(event.target.value))
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">기대 수익률</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label htmlFor="duration">투자 기간</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              handleChange("duration", Number(event.target.value))
            }
          />
        </p>
      </div>
    </section>
  );
}
