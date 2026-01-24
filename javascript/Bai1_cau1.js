

// 1.1
const Mark = {
    weight: 78,
    height: 169
}

const John = {
    weight: 92,
    height: 195
}

//1.2
const calculator = (data) => {
    const mass = data.weight * data.height
    const BMI = mass / (data.height * data.height)
    return BMI;
}

console.log ("Can nang cua john la: ", calculator(John))
console.log ("Can nang cua Mark la: ", calculator(Mark))

//1.3



const bmiJohn =   calculator(John)
const bmiMark =   calculator(Mark)

const markHigherBMI = bmiMark > bmiJohn

console.log ("Bmi mark higher bmi john ", markHigherBMI)


