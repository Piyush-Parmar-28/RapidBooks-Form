import React from 'react'

const FormInput = (props) => {
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

            <div className="col">
                <input type="number" className="form-control" placeholder="Debit Amount" name="dAmount" aria-label="Last name" value={props.dValue} onChange={props.changeFunction} />
            </div>

            <div className="col">
                <input type="number" className="form-control" placeholder="Credit Amount" name="cAmount" aria-label="Last name" value={props.cValue} onChange={props.changeFunction} />
            </div>

            <div>
                <button type="button" className="btn btn-danger" onClick={props.deleteFunction}>
                    <i className="bi bi-trash"></i>
                </button>

            </div>

        </div>
    )
}

export default FormInput