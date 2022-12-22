import React from 'react'

const Header = () => {
    return (
        <div className="d-flex flex-row justify-content-between m-2">

            <div>
                <input type="text" className="form-control" placeholder="Select Account" aria-label="Last name" disabled />
            </div>

            <div>
                <input type="text" className="form-control" placeholder="Debit Amount" aria-label="Last name" disabled />
            </div>

            <div>
                <input type="text" className="form-control" placeholder="Credit Amount" aria-label="Last name" disabled />
            </div>
            <div></div>
        </div>
    )
}

export default Header