// Reference and Primitive type
// Primitive Type
const number = 1;
const num2 = number;

console.log(num2);

// Reference Type
const person = {
    name: "Max"
}

const secondPerson = person;

person.name = "Manu";

// logs Manu althouth person name
// change after the assignment to secondPerson
console.log(secondPerson);

// This we cleare a new object - a real copy
const thirdPerson = {
    ...person
};

// Array functions
const numbers = [1, 2, 3];

// we want to turn an array in which each number 
// is doubled
const doubleNumArray = numbers.map((num) => {
    return num * 2;
})
console.log(numbers);
// Logs [2, 4, 6]
console.log(doubleNumArray);
