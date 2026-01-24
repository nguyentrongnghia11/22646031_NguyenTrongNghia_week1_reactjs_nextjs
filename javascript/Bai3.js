

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

console.log ("AVG of Dolphins: " ,calculatorAvg(Data_1.Dolphins))
console.log ("AVG of Koalas : " , calculatorAvg(Data_1.Koalas))
