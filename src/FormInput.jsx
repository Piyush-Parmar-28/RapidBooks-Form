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
        setDValue(parseFloat(s.substring(1)));
        props.addDebitDataFunc("dAmount", parseFloat(s.substring(1)), props.Index);
    }

    const creditHandler = (event) => {
        var s = (event.target.value)
        setDValue(parseFloat(s.substring(1)));
        props.addDebitDataFunc("cAmount", parseFloat(s.substring(1)), props.Index);
    }

    return (
        <div className="d-flex flex-row m-2">
            <div className="col">
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