import { useRef, useState } from "react";
import classes from "./checkOut.module.css"

const Checkout = (props) => {

  const [formInputsValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
  })


  const nameInput = useRef()
  const streetInput = useRef()
  const postalInput = useRef()
  const cityInput = useRef()

  const isEmpty = value => value.trim() === '';
  const isFiveChars = value => value.trim().length === 5;


  const confirmHandler = (event) => {
    event.preventDefault();
    const enterName = nameInput.current.value
    const enterStreet = streetInput.current.value
    const enterPostal = postalInput.current.value
    const enterCity = cityInput.current.value

    const enterNameIsValid = !isEmpty(enterName)
    const enterStreetIsValid = !isEmpty(enterStreet)
    const enterCityIsValid = !isEmpty(enterCity)
    const enterPostalIsValid = isFiveChars(enterPostal)


    setFormInputValidity({
      name: enterNameIsValid,
      street: enterStreetIsValid,
      city: enterCityIsValid,
      postalCode: enterPostalIsValid
    })


    const formIsValid = enterNameIsValid && enterStreetIsValid && enterCityIsValid && enterPostalIsValid

    if (!formIsValid) {
      return
    }

    props.onConfirm({
      name:enterName,
      street: enterStreet,
      postalCode: enterPostal,
      city: enterCity
    })


  };

  const nameControlClasses =`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`
  const streetControlClasses =`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`
  const postalCodeControlClasses =`${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`
  const cityControlClasses =`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInput} />
        {!formInputsValidity.name && <p>Please enter the valid name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInput} />

        {!formInputsValidity.street && <p>Please enter the street name.</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInput} />
        {!formInputsValidity.postalCode && <p>Please enter the valid 5 digt postal code.</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInput} />
        {!formInputsValidity.city && <p>Please enter the city name.</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>

    </form>
  );
};

export default Checkout;