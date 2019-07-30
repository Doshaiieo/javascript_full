let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("2019-07-26", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false,
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдётся?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдётся?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);
