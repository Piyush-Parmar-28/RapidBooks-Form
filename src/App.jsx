import React, { useState } from 'react'

import Header from './Header'
import FormInput from './FormInput'

const App = (props) => {

    var [formData, setFormData] = useState([{
        account: "",
        dAmount: 0,
        cAmount: 0
    }]);

    function handleChange(event) {

        setFormData((prevValue) => {
            return (
                [...prevValue,

                {
                    [event.target.name]: event.target.value
                }
                ]
            )
        })

        // setFormData({ ...formData, [event.target.name]: event.target.value })

        console.log(formData);
    }

    function addRow() {
        console.log("Inside addRow");
        console.log(formData);

        setFormData((prevValue) => {
            return (
                [...prevValue,

                {
                    account: "",
                    dAmount: 0,
                    cAmount: 0
                }
                ]
            )
        })


    }

    console.log("after addition");
    console.log(formData);

    function handleDelete(itemIndex) {
        console.log(itemIndex);

        setFormData((data) => {
            return (
                data.filter((data, index) => {
                    return index != itemIndex;
                }
                )
            )

        })

        console.log(formData);
    }

    return (
        <main>
            <section className="extra-padding blue-bg">
                <div className="container">

                    <form method="post" className="form-style">

                        <div className="d-flex justify-content-between flex-wrap">

                            <Header></Header>

                            {
                                formData.map((data, index) => {
                                    return (
                                        <FormInput
                                            ID={index}
                                            deleteFunction={handleDelete}
                                            key={index}
                                            changeFunction={handleChange}

                                            accountValue={formData.account}
                                            cValue={formData.cAmount}
                                            dValue={formData.dAmount}
                                        />
                                    )
                                })
                            }

                            <div>
                                <button type="button" className="btn btn-success" onClick={addRow}><i className="bi bi-plus"></i></button>
                            </div>

                        </div>

                    </form>

                </div>
            </section>
        </main>

    )
}

export default App