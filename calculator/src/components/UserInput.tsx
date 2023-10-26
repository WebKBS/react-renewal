import { InputChangeHandler, InvestmentData } from "../types/type";

export default function UserInput({
  onChange,
  userInput,
}: InputChangeHandler & { userInput: InvestmentData }) {
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
              onChange("initialInvestment", Number(event.target.value))
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
              onChange("annualInvestment", Number(event.target.value))
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
              onChange("expectedReturn", Number(event.target.value))
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
              onChange("duration", Number(event.target.value))
            }
          />
        </p>
      </div>
    </section>
  );
}
