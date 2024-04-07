import { useEffect, useRef, useState } from "react";
import useInput from "./hooks/use-Input-hooks";

const SimpleInput = (props) => {

  const {
    value:enteredName,
    hasError:nameInputHasError,
    isValid:enterNameIsValid,
    valueChangeHandler:nameChangeHandler,
    inputBlurHandler:nameBlurHandler,
    reset:resetNameInput,
  }=useInput(value=> value.trim()!== '')

  const{
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput,
  }=useInput(value=> value.includes("@"))
  // const nameInputRef = useRef()
  
  // TO ADDING EXTRA VALIDATION WE SHOULD ADD EXTRA STATE 
  // const [enteredNameTouched ] = useState(false)
  
  
  
  let formIsValid = false



  const formHandler = e => {
    e.preventDefault()
    // setEnteredName('')   WE CAN USE THIS IN ONLY USESTAE 
    // USING useRef
    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue);
    // enteredName.current.value = '' BY DOING THIS WE DO DIRECT MANUPLATING THE REACT DOM WHICH SHOULD NOT BE DO INSTAND REACT SHOULD DO BT ITSELF HENCE IT IS NOT IDEAL
    if (enterNameIsValid && enteredEmailIsValid) {
      formIsValid=true;
      console.log(formIsValid);
    }
    resetNameInput()
    resetEmailInput()
  }
  const nameInputClass = nameInputHasError ? "form-control invalid" : "form-control ";
  const emailInputClass = emailInputHasError ? "form-control invalid" : "form-control ";
  return (
    <form onSubmit={formHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          // ref={nameInputRef}
          type='text'
          id='name'
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          value={enteredName}
        />
        {
          nameInputHasError && <p className="error-text">Name should not be empty.</p>
        }
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Email address</label>
        <input
          // ref={nameInputRef}
          type='email'
          id='name'
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        {
          emailInputHasError && <p className="error-text">Email should not be empty.</p>
        }
      </div>
      <div className="form-actions">
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
