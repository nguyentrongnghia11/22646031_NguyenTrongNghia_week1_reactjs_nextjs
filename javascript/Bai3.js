
//3.1
const Data_1 = {
    Dolphins: [96, 108, 89],
    Koalas: [88, 91, 110]
}

const Data_bonus_1 = {
    Dolphins: [97, 112, 101],
    Koalas: [109, 95, 123]
}

const Data_bonus_2 = {
    Dolphins: [97, 112, 101],
    Koalas: [109, 95, 106]
}

const calculatorAvg = (numbers) => {
    const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    return average
}

const calculatorSum = (numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);

}

console.log("AVG of Dolphins: ", calculatorAvg(Data_1.Dolphins))
console.log("AVG of Koalas : ", calculatorAvg(Data_1.Koalas))

// 3.2
calculatorAvg(Data_1.Dolphins) > calculatorAvg(Data_1.Koalas) ? console.log("Dolphins win")
    : calculatorAvg(Data_1.Dolphins) < calculatorAvg(Data_1.Koalas) ? console.log("Koalas win") : console.log("Equals")

// 3.3
const checkWin = (team1, team2) => {

    if (calculatorSum(team1) < 100 && calculatorSum(team2) < 100 ) {
        console.log("Both loss")
        return;
    }

    if (calculatorSum(team2) < 100) {
        console.log("Team 2 loss")
        return;
    }

    if (calculatorSum(team1) < 100) {
        console.log("Team 1 loss")
        return;
    }

    if (calculatorSum(team2) < 100) {
        console.log("Team 2 loss")
        return;
    }

    calculatorAvg(Data_1.Dolphins) > calculatorAvg(Data_1.Koalas) ? console.log("Dolphins win")
        : calculatorAvg(Data_1.Dolphins) < calculatorAvg(Data_1.Koalas) ? console.log("Koalas win") : console.log("Equals")

}

console.log ("Bai 3 cau 3: ")
checkWin (Data_bonus_1.Dolphins, Data_bonus_1.Koalas)



