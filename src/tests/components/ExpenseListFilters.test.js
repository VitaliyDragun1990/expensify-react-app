import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />);
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    // set different filters to test with
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    // simulate onChange event on input element
    wrapper.find('input[type="text"]').simulate('change', { target: { value: 'gas' } });
    // assert desired interactions with spies
    expect(setTextFilter).toHaveBeenLastCalledWith('gas');
});

test('should sort by date', () => {
    const value = 'date';
    // set different filters to test with
    wrapper.setProps({
        filters: altFilters
    });
    // simulate onChange event on select element
    wrapper.find('select').simulate('change', { target: { value } });
    // assert desired interactions with spies
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = 'amount';
    // simulate onChange event on select element
    wrapper.find('select').simulate('change', { target: { value } });
    // assert desired interactions with spies
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    // simulate onDatesChange handler call on the DateRangePicker component
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: altFilters.startDate,
        endDate: altFilters.endDate
    });
    // assert desired interactions with spies
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    // simulate onFocusChange handler call on the DateRangePicker component
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    // assert desired interactions with spies
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});


