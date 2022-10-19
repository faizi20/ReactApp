import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';

function Expense(props) {
    const [filterYear, setFilterYear] = useState('2022')
    const filterChangeHandler = (selectFilter) => {
        setFilterYear(selectFilter)
    }
    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
            {props.items.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
            ))}
        </Card>
    )
}

export default Expense