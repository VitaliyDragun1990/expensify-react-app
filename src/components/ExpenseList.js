import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense}/>)
            )
        }
    </div>
);

// map our application state to this particular component props object
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// This is return High Order Component
export default connect(mapStateToProps)(ExpenseList);