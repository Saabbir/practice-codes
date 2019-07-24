const account = {
    name: 'Saabbir Hossain',
    incomes: [],
    expenses: [],
    addIncome: function (incomeSource, incomeAmount) {
        this.incomes.push({
            incomeSource: incomeSource,
            incomeAmount: incomeAmount
        })
    },
    addExpens: function (expenseName, expenseAmount) {
        this.expenses.push({
            expenseName: expenseName,
            expenseAmount: expenseAmount
        })
    },
    getAccountSummary: function () {
        let totalExpenseAmount = 0
        this.expenses.forEach(function (expense) {
            totalExpenseAmount += expense.expenseAmount
        })

        let totalIncomeAmount = 0
        this.incomes.forEach(function (income) {
            totalIncomeAmount += income.incomeAmount
        })

        let balance = totalIncomeAmount - totalExpenseAmount

        return `${this.name} has a balance of $${balance}. $${totalIncomeAmount} in income. $${totalExpenseAmount} in expense.`
    }
}

account.addExpens('Rent', 100)
account.addExpens('Meal', 50)
account.addExpens('Pocket Money', 50)
account.addIncome('Upwork', 500)

console.log(account.getAccountSummary())