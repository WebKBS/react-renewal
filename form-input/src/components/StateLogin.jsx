function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  function handleInputChange(identifier, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: event,
    }));
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlepasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return <div>StateLogin</div>;
}

export default StateLogin;
