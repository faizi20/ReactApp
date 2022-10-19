import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
  const SaveExpenseHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpense={SaveExpenseHandler} />
    </div>
  )
}

export default NewExpense