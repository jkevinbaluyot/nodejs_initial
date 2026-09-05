var name = 'Max';
var age = 29;
var hasHobbits = true;

function summarizeUser(userName, userAge, userHasHobby){
    return( 
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and user has hobbies:  ' 
        + userHasHobby
    )
}

// Alt declaration of function
const  summarizeUserAlt = (userName, userAge, userHasHobby) => {
    return( 
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and user has hobbies:  ' 
        + userHasHobby
    )
}

const add = (a, b) => a + b;

const addOne = a => a + 1;


console.log(add(1, 2))
console.log(summarizeUser(name, age, hasHobbits));