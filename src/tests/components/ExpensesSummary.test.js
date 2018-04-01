import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary without expenses', () => {
   const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0}/>);
   expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={expenses[0].amount}/>);
    expect(wrapper).toMatchSnapshot();
});