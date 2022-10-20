import React, { useState } from 'react'
import './Expense.css';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expense(props) {
    const [filterYear, setFilterYear] = useState('2022')
    const filterChangeHandler = (selectFilter) => {
        setFilterYear(selectFilter)
    }
    const filterExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear
    })

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses={filterExpense}/>
            <ExpenseList items={filterExpense}/>
        </Card>
    )
}

export default Expense