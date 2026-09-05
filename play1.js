const person = {
    name: 'Max',
    age: 29,
    greet: () => {
        console.log('Hi, I am ' + this.name)
    }
};

console.log(person);

// Array
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;

for (let hobby of hobbies){
    console.log(hobby);
}

// Used for rendering array
console.log(hobbies.map(hobby => {
    return 'Hobby: '+ hobby;
}));

console.log(hobbies)

// Spread Operator
const copiedArray = [...hobbies];

console.log(copiedArray);

// Rest Operator
const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4));

console.log(toArray(1,2,3,4,5));

// Destructuring
const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age } = person;

console.log(name, age);

console.log(hobby1, hobby2) // Array Destructuring

// Promises

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    })

    return promise;
};

setTimeout(() => {
    console.log('Timer is done');
    fetchData().then(text => {
        console.log(text);

        return fetchData();
    }).then(text2 => {
        console.log(text2);
    });
}, 2000)



