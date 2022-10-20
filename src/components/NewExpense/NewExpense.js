import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false)
  const SaveExpenseHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const onAddFormHandler = () => {
    setIsEditing(true)
  }

  const stopEditing = () => {
    setIsEditing(false)
  }
  return (
    <div className='new-expense'>
      {!isEditing ?
        <button onClick={onAddFormHandler}>Add New Expense</button>
        :
        <ExpenseForm onSaveExpense={SaveExpenseHandler} onCancel={stopEditing} />
      }
    </div>
  )
}

export default NewExpense