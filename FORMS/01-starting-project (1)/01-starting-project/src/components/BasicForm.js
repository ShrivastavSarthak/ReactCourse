import useInput from "./hooks/use-Input-hooks";
import useBasicInput from "./hooks/useBasic";



const BasicForm = (props) => {


  
  const {

    value:Fname,
    hasError:FnameHasError,
    isValid: enterFnameIsValid,
    valueChangeHandler: FnameChangeHandler,
    inputBlurHandler: FnameBlurHandler,
    reset:resetFnameInput
  } = useBasicInput(value => value.trim()!== '');

  const {

    value:Lname,
    hasError:LnameHasError,
    isValid: enterLnameIsValid,
    valueChangeHandler: LnameChangeHandler,
    inputBlurHandler: LnameBlurHandler,
    reset:resetLnameInput
  } = useInput(value => value.trim()!== '');

  const {

    value:enterEmail,
    hasError:EmailHasError,
    isValid: enterEmailIsValid,
    valueChangeHandler: EmailChangeHandler,
    inputBlurHandler: EmailBlurHandler,
    reset:resetEmailInput
  } = useBasicInput(value => value.includes("@"));



  let formIsValid = true

  if(enterFnameIsValid && enterLnameIsValid && enterEmailIsValid){
    formIsValid = false;
    console.log("its valid");
    console.log(formIsValid);
  }


  const formHandler = e=>{
    e.preventDefault();
    // if(!formIsValid){
    //   return
    // }
    resetFnameInput()
    resetLnameInput()
    resetEmailInput()
  }
  const FnameInputClass = FnameHasError ? "form-control invalid" : "form-control ";

  const LnameInputClass = LnameHasError ? "form-control invalid" : "form-control ";


  const emailInputClass = EmailHasError ? "form-control invalid" : "form-control ";
  return (
    <form onSubmit={formHandler}>
      <div className='control-group'>
        <div className={FnameInputClass }>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='name' 
          value={Fname}
          onChange={FnameChangeHandler}
          onBlur={FnameBlurHandler}
          />
          {
            FnameHasError && <p className="error-text">Name should not be empty.</p>
          }
        </div>
        <div className={LnameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name' 
          value={Lname}
          onChange={LnameChangeHandler}
          onBlur={LnameBlurHandler}
          />
          {
            LnameHasError && <p className="error-text">Name should not be empty.</p>
          }
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='text' 
        id='name' 
        value={enterEmail}
        onChange={EmailChangeHandler}
        onBlur={EmailBlurHandler}
        />
        {
          EmailHasError && <p className="error-text">Name should not be empty.</p>
        }
      </div>
      <div className='form-actions'>
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
