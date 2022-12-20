import React from 'react'

const AddBtn_total = (props) => {
    return (
        <div className="d-flex flex-row m-2">
            
            <div className="d-flex justify-content-between">

                <button type="button" className="btn btn-success" onClick={props.addRowFunc}><i className="bi bi-plus"></i></button>

                <input type="text" className="form-control col-6" placeholder="Total" name="dAmount" aria-label="Last name" disabled/>

            </div>

            <div className="col">
                <input type="text" className="form-control" placeholder={props.total2} name="dAmount" aria-label="Last name" disabled/>
            </div>

            <div className="col">
                <input type="text" className="form-control" placeholder={props.total3} name="cAmount" aria-label="Last name" disabled/>
            </div>

        </div>
    )
}

export default AddBtn_total