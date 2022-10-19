import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')

    const changeTitleHandler = (event) => {
        setEnterTitle(event.target.value)
    }
    const changeAmountHandler = (event) => {
        setEnterAmount(event.target.value)
    }
    const changeDateHandler = (event) => {
        setEnterDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseDate = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }
        props.onSaveExpense(expenseDate)
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enterTitle} onChange={changeTitleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enterAmount} min='0.01' step='0.01' onChange={changeAmountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enterDate} min='2019-1-1' max='2023-12-31' onChange={changeDateHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm