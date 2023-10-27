import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import Input from "./Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier: string, value: string) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800"
    >
      <ControlContainer>
        <div className="flex flex-col gap-2 mb-6">
          <Input
            type="email"
            label="Email"
            invalid={emailNotValid}
            // className={emailNotValid ? "invalid" : undefined}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleInputChange("email", event.target.value)
            }
          />

          <Input
            type="password"
            label="Password"
            invalid={passwordNotValid}
            // className={passwordNotValid ? "invalid" : undefined}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleInputChange("password", event.target.value)
            }
          />
        </div>
        <p>Some text</p>
      </ControlContainer>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
