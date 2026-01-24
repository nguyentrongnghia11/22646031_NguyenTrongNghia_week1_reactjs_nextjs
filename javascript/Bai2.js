//2.1
const Mark = {
    weight: 78,
    height: 1.8
}

const John = {
    weight: 92,
    height: 1.95
}

const calculator = (data) => {
    const BMI = data.weight / (data.height * data.height)
    return BMI;
}
const bmiJohn =   calculator(John)
const bmiMark =   calculator(Mark)

const markHigherBMI = bmiMark > bmiJohn

markHigherBMI ? console.log (`Mark's (${bmiMark}) BMI is higher than John's (${bmiJohn})!`) : console.log (`John's (${bmiJohn}) BMI is higher than Mark's (${bmiMark})!`)


