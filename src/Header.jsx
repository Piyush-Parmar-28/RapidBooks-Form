import React from 'react'

const Header = () => {
    return (
        <div className="d-flex flex-row m-2">

            <div className="col">
                <input type="text" className="form-control" placeholder="Debit Amount" aria-label="Last name" disabled />
            </div>

            <div className="col">
                <input type="text" className="form-control" placeholder="Debit Amount" aria-label="Last name" disabled />
            </div>

            <div className="col">
                <input type="text" className="form-control" placeholder="Credit Amount" aria-label="Last name" disabled />
            </div>

            <div>
                <button disabled type="button" className="btn btn-danger"><i className="bi bi-trash"></i></button>
            </div>

        </div>
    )
}

export default Header