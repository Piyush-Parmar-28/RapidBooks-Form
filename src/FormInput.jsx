import React, { useState } from 'react'
import CurrencyInput from "react-currency-input-field";

const FormInput = (props) => {

    const [dValue, setDValue] = useState("0");
    const [cValue, setCValue] = useState("0");

    const handleDebitChange = (newValue) => {
        if (newValue === undefined) {
            setDValue("0");
        } else {
            setDValue(newValue);
        }

    };

    const handleCreditChange = (newValue) => {
        if (newValue === undefined) {
            setCValue("0");
        } else {
            setCValue(newValue);
        }
    };

    const debitHandler = (event) => {
        var s = (event.target.value)
        
        s= s.replaceAll("₹", "");
        s= s.replaceAll("₹N", "");
        s= s.replaceAll("₹Na", "");
        s= s.replaceAll("₹NaN", "");
        s= s.replaceAll(",", "");

        if(s.length == 0){
            s= '0';
        }
        props.addDebitDataFunc("dAmount", parseFloat(s), props.Index);
    }

    const creditHandler = (event) => {
        var s = (event.target.value)
        s= s.replaceAll("₹", "");
        s= s.replaceAll("₹N", "");
        s= s.replaceAll("₹Na", "");
        s= s.replaceAll("₹NaN", "");
        s= s.replaceAll(",", "");

        if(s.length == 0){
            s= '0';
        }

        props.addDebitDataFunc("cAmount", parseFloat(s), props.Index);
    }

    return (
        <div className="d-flex flex-row justify-content-between m-2">
            <div>
                <select className="form-select" aria-label="Default select example" name="account" value={props.accountValue} onChange={props.changeFunction}>
                    <option defaultValue>Select Account</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <CurrencyInput
                intlConfig={{ locale: 'en-IN', currency: 'INR' }}
                allowDecimals
                placeholder="Debit"
                decimalSeparator="."
                id="input-currency-field"
                name="dAmount"
                prefix="₹"
                onValueChange={handleDebitChange}
                value={dValue}
                onChange={debitHandler}
                step={1}
            />

            <CurrencyInput
                intlConfig={{ locale: 'en-IN', currency: 'INR' }}
                allowDecimals
                placeholder="Debit"
                decimalSeparator="."
                id="input-currency-field"
                name="dAmount"
                prefix="₹"
                onValueChange={handleCreditChange}
                value={cValue}
                onChange={creditHandler}
                step={1}
            />

            <div>
                <button type="button" className="btn btn-danger" onClick={props.deleteFunction}>
                    <i className="bi bi-trash"></i>
                </button>

            </div>

        </div>
    )
}

export default FormInput;