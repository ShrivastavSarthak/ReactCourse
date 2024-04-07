import React, { useReducer, useState } from "react";



const initialState ={
    value:'',
    isTouched: false
}

const inputStateReducer = (state,action)=>{
    if(action.type ==="INPUT"){
        return{
            value: action.value,
            isTouched: state.isTouched
        }
    }
    if(action.type === "BLUR"){
        return{
            isTouched:true, value: state.value
        }
    }
    if(action.type === "RESET"){
        return{
            isTouched: false,
            value:''
        }
    }
    return initialState
}
const useBasicInput = (valaidateValue)=>{
    const [inputState,dispatch] =useReducer(inputStateReducer,initialState)
    

    const valueIsValid = valaidateValue(inputState.value)
    const hasError = !valueIsValid && inputState.isTouched

    const valueChangeHandler =e =>{
        dispatch({

            type: "INPUT",
            payload: e.target.value
        }
        )
    }
    const inputBlurHandler=e=>{
        dispatch({

            type: "BLUR",
        }
        )
    }

    const reset=()=>{
        dispatch({

            type: "RESET"
        }
        )
    }


    return{
        value: inputState.value,
        hasError,
        isValid:valueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

}


export default useBasicInput