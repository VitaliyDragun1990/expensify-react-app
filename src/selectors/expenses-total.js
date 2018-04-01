/*********** SELECTOR ****************/

export default (expenses = []) => {
    return expenses
        .map(expense => expense.amount)
        .reduce((prevValue, currentValue) => prevValue + currentValue, 0);
}