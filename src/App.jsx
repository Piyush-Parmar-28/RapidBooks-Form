import React, { useState } from 'react'

import Header from './Header'
import FormInput from './FormInput'
import AddBtn_total from './AddBtn_total'

const App = (props) => {

    var [formData, setFormData] = useState([
        {
            account: "",
            dAmount: 0,
            cAmount: 0
        },
        {
            account: "",
            dAmount: 0,
            cAmount: 0
        },
        {
            account: "",
            dAmount: 0,
            cAmount: 0
        }
    ]);

    var [total2Value, setTotal2Value] = useState(0);
    var [total3Value, setTotal3Value] = useState(0);

    function handleChange(event, itemIndex) {

        console.log("event details: ");
        console.log(event);

        setFormData((Data) => {

            Data[itemIndex] = {
                ...Data[itemIndex], [event.target.name]: event.target.value
            }

            setFormData(Data)

            return (
                Data
            )
        })
        calcTotal()
        
    }

    function calcTotal() {
        var sum2= 0;
        var sum3= 0;

        formData.map((data) => {
            sum2+= data.dAmount;
            sum3+= data.cAmount;
        })
        setTotal2Value(sum2);
        setTotal3Value(sum3);
    }

    console.log("Total Values: ");
    console.log(total2Value);
    console.log(total3Value);

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
        console.log("Index is: ");
        console.log(itemIndex);
        setFormData((Data) => {
            return (
                Data.filter((items, index) => {
                    return index !== itemIndex;
                }
                )
            )

        })

        console.log(formData);
    }

    function toRupees(data){
        return Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR"
        }).format(data)

    }

    return (
        <main>
            <section className="extra-padding blue-bg">
                <div className="container">

                    <form method="post" className="form-style">

                        <div>

                            <Header></Header>

                            {
                                formData.map((data, index) => {
                                    return (
                                        <FormInput
                                            key={index}
                                            ID={index}
                                            deleteFunction={() => { handleDelete(index) }}
                                            changeFunction={(event) => { handleChange(event, index) }}

                                            accountValue={formData.account}
                                            cValue={ ()=>{ toRupees(formData.cAmount )} }
                                            dValue={ ()=>{ toRupees(formData.dAmount )} }
                                        />
                                    )
                                })
                            }

                            <AddBtn_total
                                addRowFunc={addRow}
                                total2={ ()=>{ toRupees(total2Value) } }
                                total3={ ()=>{ toRupees(total3Value) } }
                            />

                        </div>

                    </form>

                </div>
            </section>
        </main>

    )
}

export default App