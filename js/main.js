var time, monye;

function start() {
    alert("Hello User!");
    monye = +prompt("Your monye for month?");
    time = +prompt("Please enter date YYYY-MM-DD");

     while(isNaN(monye) || monye == "" || monye == null) { // isNaN проверка на строку 
        monye = +prompt("Your monye for month?");
     }
}
start();

let appData = {
    budget: monye,
    timeData: time,
    expenses: {}, 
    optionalExpenses: {}, 
    income: {},
    savings: true,
    ChooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Please, etner your expenses item this month", ''), 
                b = prompt("How much?", '');
            
            if (typeof(a)=== 'string' && typeof(a) !=null && typeof(b) !=null && 
                    a != '' && b != '' && a.length < 50){                
                 console.log("done");
                 appData.expenses[a]=b;
            } else {
                 alert("Try Again");
                 i-- ;
            }  
         }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Budget per Day: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Min");
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Midle");
        }else if (appData.moneyPerDay > 2000) {
            console.log("High");
        }else {
            console.log("Error");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt ("how much your savings?"),
                precent = +prompt ("which precent?");
            
    
            appData.monthIncome = save/100/12*precent;
            alert("Your money per month in deposit: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        let i = 0;
        do {
            let a = prompt("Please, etner your expenses optional item ", '');
            if (typeof(a)=== 'string' && typeof(a) !=null && a != '' && a.length < 50){
                console.log("done");
                appData.optionalExpenses[i+1]=a;
                i++;
            } else {
                let c = "not have opt expenses";
                appData.optionalExpenses[c]=a;
                break;
            }
        } 
        while (i < 3);
    },
    chooseIncome: function() {
        for (i = 0; i < 3; i++) {
        let item = prompt("What will brought this is income? Please, write this is through comma.", '');
            if (typeof(item)=== 'string' && typeof(item) !=null && item != '' && item.length < 50){ 
            console.log("done");  
            appData.income = item.split(', ');
            appData.income.push(prompt("Maybe do you want one more yet? "));
            appData.income.sort();
            i = 3;       
        }else {
            alert("Please, can you try again. ");
            }
        }
        appData.income.forEach(function(item, i) {
        i++;
        alert(i + " Ways for additional Incoming: " + item );
        });
    }
}; 

// appData.ChooseExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();
// appData.chooseOptExpenses();
// appData.chooseIncome();

console.log("Us program has: ");
for (let key in appData){
    console.log(key + ' ' + appData.key);   
}

let startBtn = document.getElementById('start'),
    resultTable1 = document.getElementsByClassName('budget budget-value daybudget daybudget-value expenses'),
    resultTable2 = document.getElementsByClassName('expenses-value income income-value level level-value monthsavings monthsavings-value'),
    resultTable3 = document.getElementsByClassName('optionalexpenses optionalexpenses-value yearsavings yearsavings-value'),
    resultTable1 = resultTable2 = resultTable3,
    expensesItem = document.getElementsByClassName('expenses-item'),
    optionalExpenses = document.getElementsByClassName('optionalexpenses-item'),
    btnAccept = document.getElementsByTagName("Утвердить"),
    btnCalculate = document.getElementsByTagName("Рассчитать"),
    input = document.querySelector('.choose-income .choose-sum .choose-percent .checksavings .year .day .month');
    


