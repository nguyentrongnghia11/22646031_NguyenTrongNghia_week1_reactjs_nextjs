//2.1
const Mark = {
    weight: 78,
    height: 169
}

const John = {
    weight: 92,
    height: 195
}

const calculator = (data) => {
    const mass = data.weight * data.height
    const BMI = mass / (data.height * data.height)
    return BMI;
}
const bmiJohn =   calculator(John)
const bmiMark =   calculator(Mark)

const markHigherBMI = bmiMark > bmiJohn

markHigherBMI ? console.log ("Mark's BMI is higher than John's!") : console.log ("John's BMI is higher than Mark's!")


