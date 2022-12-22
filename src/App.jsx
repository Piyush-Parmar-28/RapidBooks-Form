import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Header from './Header'
import FormInput from './FormInput'
import AddBtn_total from './AddBtn_total'

const App = (props) => {
    var
     [totalD, setTotalD] = useState(0);
    var [totalC, setTotalC] = useState(0);

    var [formData, setFormData] = useState([
        {
            id: uuidv4(),
            account: "",
            dAmount: 0,
            cAmount: 0
        },
        {
            id: uuidv4(),
            account: "",
            dAmount: 0,
            cAmount: 0
        },
        {
            id: uuidv4(),
            account: "",
            dAmount: 0,
            cAmount: 0
        }
    ]);

    function addRow() {
        setFormData((prevValue) => {
            return (
                [...prevValue,
                {
                    id: uuidv4(),
                    account: "",
                    dAmount: 0,
                    cAmount: 0
                }
                ]
            )
        })
    }

    function deleteRow(itemID) {
        setFormData((Data) => {
            return (
                Data.filter((item) => {
                    return item.id !== itemID;
                }
                )
            )
        })
    }

    function handleChange(event, itemIndex) {
        setFormData((Data) => {

            Data[itemIndex] = {
                ...Data[itemIndex], [event.target.name]: parseInt(event.target.value)
            }
            setFormData(Data)

            return (
                Data
            )
        })
        console.log(formData);
    }

    const addDebitData = (name, val, itemIndex) => {
        setFormData((Data) => {

            Data[itemIndex] = {
                ...Data[itemIndex], [name]: parseInt(val)
            }
            setFormData(Data)

            return (
                Data
            )
        })
        calcTotal()
    }

    const addCreditData = (name, val, itemIndex) => {
        setFormData((Data) => {

            Data[itemIndex] = {
                ...Data[itemIndex], [name]: parseInt(val)
            }
            setFormData(Data)

            return (
                Data
            )
        })

        console.log(formData);
        calcTotal()
    }

    var sum2 = 0;
    var sum3 = 0;
    function calcTotal() {
        console.log("all data: ", formData);
        console.log("\ndAmount are: ");
        formData.map((data) => {
            console.log(data.dAmount);

            sum2 += data.cAmount
            sum3 += data.dAmount
        })

        setTotalC(sum2)
        setTotalD(sum3)
    }

    return (
        <main className='blue-bg'>
            <div className="container">

                <form method="post" className="form-style">

                    <div>

                        <Header></Header>

                        {
                            formData.map((data, index) => {
                                return (
                                    <FormInput
                                        key={data.id}
                                        Index={index}
                                        deleteFunction={() => { deleteRow(data.id) }}
                                        changeFunction={(event) => { handleChange(event, index) }}
                                        accountValue={data.account}
                                        debitAmount={data.dAmount}
                                        creditAmount={data.cAmount}
                                        addDebitDataFunc={addDebitData}
                                        addCreditDataFunc={addCreditData}
                                    />
                                )
                            })
                        }

                        <AddBtn_total
                            addRowFunc={addRow}
                            totalDebit={totalD}
                            totalCredit={totalC}
                        />

                    </div>

                </form>

            </div>
        </main>

    )
}

export default App