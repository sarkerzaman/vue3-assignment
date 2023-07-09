//Exercise 1:
function destructureExample(obj, arr){
    let {name, age} = obj

    let [a, , b] = arr

    return {name, age}
}

const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];

let result = destructureExample(obj, arr);
console.log(result);    //Output: { name: 'John', age: 30 }

//Exercise 2:
function sumNumbers(...numbers){
    let sum = 0;

    for(let i=0; i<numbers.length; i++)
        sum += numbers[i];

    return sum;
}

result = sumNumbers(1, 2, 3, 4, 5);
console.log(result);    //Output: 15

//Exercise 3:
function createGreeting(name){
    return `Hello, ${name}! Welcome to our website.`;
}

result = createGreeting('Alice');
console.log(result);    //Output: "Hello, Alice! Welcome to our website."

//Exercise 4:
function isEven(number){
    if(number % 2 == 0)
        return "Even"
    else
        return "Odd"
}

result = isEven(7);
console.log(result);    //Output: "Odd"

//Exercise 5:
multiply = (a, b) => a*b 

result = multiply(7, 4);
console.log(result);    // Output: 28

//Exercise 6:
function getLargestNumber(a, b){
    return a > b? a: b
}

result = getLargestNumber(10, 5);
console.log(result);    // Output: 10

//Exercise 7:
function getAddressCity(address){    
    return address?.city ?? "Unknown"
}

const address1 = { street: '123 Main St', country: 'USA' };
const address2 = { street: 'F-6, Pallabi', city:'Mirpur', country: 'Bangladesh' };

result = getAddressCity(address1);
console.log(result);    // Output: "Unknown"

result = getAddressCity(address2);
console.log(result);    // Output: "Mirpur"

//Exercise 8:
const doubleNumbers = (numbers) => numbers.map((number)=>number*2)

result = doubleNumbers([1, 2, 3, 4, 5]);
console.log(result);    // Output: [2, 4, 6, 8, 10]

//Exercise 9: 
const filterEvenNumbers = (numbers) => numbers.filter((number)=>number%2==0)

result = filterEvenNumbers([1, 2, 3, 4, 5]);
console.log(result);    // Output: [2, 4]

//Exercise 10: 
const sumArray = (numbers) => numbers.reduce((o,n)=>o+n)

result = sumArray([1, 2, 3, 4, 5]);
console.log(result);    // Output: 15

//Exercise 11: 
const sortNumbers = (numbers) => numbers.sort()

result = sortNumbers([5, 2, 8, 1, 4]);
console.log(result);    // Output: [1, 2, 4, 5, 8]