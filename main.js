const input = require('sync-input');

function convert(fromCurrency, toCurrency, amount) {
    let res = courses[toCurrency] / courses[fromCurrency] * amount;
    console.log(`Result: ${amount} ${fromCurrency} equals ${res.toFixed(4)} ${toCurrency}`);
}

function greetings() {
    console.log("Welcome to Currency Converter!");
    for (const x in courses) {
        console.log(`1 USD equals  ${courses[x]} ${x}`);
    }
}

function working() {
    console.log("What do you want to convert?");
    let fromCurrency = input("From: ").toUpperCase();
    if (courses[fromCurrency] !== undefined) {
        let toCurrency = input("To: ").toUpperCase();
        if (courses[toCurrency] !== undefined) {
            let amount = Number(input("Amount: "));
            if (amount < 1) {
                console.log("The amount can not be less than 1.");
            } else if (isNaN(amount)) {
                console.log("The amount has to be a number");
            } else convert(fromCurrency, toCurrency, amount);
        } else {
            console.log("Unknown currency");
            working();
        }
    } else {
        console.log("Unknown currency");
        working();
    }
}

const courses = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

let ready = true;
greetings();
do {
    console.log("What do you want to do?\n" +
        "1-Convert currencies 2-Exit program");
    let num = Number(input());
    switch (num) {
        case 1:
            working();
            break;
        case 2:
            console.log("Have a nice day!");
            ready = false;
            break;
        default:
            console.log("Unknown input");
            break;
    }
} while (ready);
