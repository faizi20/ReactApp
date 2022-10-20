import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

function ExpenseList(props) {
  return (
    <ul className='expenses-list'>
      {props.items.length === 0 ? <h2 className='expenses-list__fallback'>No Expense Found</h2>
         :
          props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          ))
      }
    </ul>
  )
}

export default ExpenseList