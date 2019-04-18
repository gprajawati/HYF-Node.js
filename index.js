const lodash = require('lodash');
const fs = require('fs')

/*Create an array of objects {name: “”, age: “”}*/
let person = [

    {
        name: "Jon Snow",
        age: 38
    },
    {
        name: "Daenerys Targaryen",
        age: 30
    },
    {
        name: "Arya Stark",
        age: 28
    },
    {
        name: "Tyrion Lannister",
        age: 44
    }
]

const people = lodash.map(person, (myPeople) => {
    console.log(myPeople)
})


/*Sort the array in a descending order based on the age. lodash*/
const descAge = lodash.orderBy(person, ['age'], ['desc'])
console.log(descAge)


/*Find the oldest person. lodash*/
const oldestPerson = lodash.maxBy(person, (maxAge) => {
    return maxAge.age
})
console.log(oldestPerson)


/*Find the youngest person. lodash*/
const youngestPerson = lodash.minBy(person, (minAge) => {
    return minAge.age
})
console.log(youngestPerson)


/*Remove the oldest person from the array. lodash*/
const removeTheOldest = lodash.remove(person, (removeOldPerson) => {
    return removeOldPerson === oldestPerson;
});
console.log(removeTheOldest)
console.log(person)


/*Add some objects to the array with the same age but different names*/
const addPeople = person.push({ name: 'Joffrey Baratheon', age: 25 }, { name: 'Bran Stark', age: 25 }, { name: 'Khal Drogo', age: 40 }, { name: 'Theon Greyjoy', age: 30 }, { name: 'Jaime Lannister', age: 40 });
console.log(addPeople[person])
console.log(person)


/*Group the people by age. lodash*/
const groupedByAge = lodash.groupBy(person, person => person.age);
console.log(groupedByAge)


/*(Challenge) Iterate through the array and add an entry to the file with every person in the array in the form: name is age*/
const iteratePeps = person.forEach((i) => {
        fs.appendFile('people.txt', `${i.name} is ${i.age}\n`, (err) => {
            if (err) {
                console.log(err)
                return;
            }
        })
        console.log(`${i.name} is ${i.age}`)
})


