import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

import { useState } from "react";

function App() {
  const [userInput , setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration:6
  });

  function handleChange(inputIdentifier , newValue){
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
  }

  const isValidInput = userInput.duration >= 1;

  return (
    <>
      <Header/>

      <UserInput 
      onChange = {handleChange}
      userInput={userInput}
      />
      {!isValidInput && <p className="center">Please Enter the Duration correctly (Duration must be atleast 1 year)</p>}
      {isValidInput && <Results input={userInput}/>}
    </>
  );
}

export default App
