
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

console.log ("Can nang cua john la: ", calculator(John))
console.log ("Can nang cua Mark la: ", calculator(Mark))
