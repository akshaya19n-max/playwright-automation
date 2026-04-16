import { clear } from "node:console";
import { resolve } from "node:dns";

/*
***Code to reverse a string***

function reverseString(str) {

    let str1 = "";
    for (let i = str.length - 1; i >= 0; i--) 
    {
        str1 = str1 + str[i];
    }
    console.log(str1);
}  
reverseString("hello");

 */

// Prime numbers : 2,3,5,7,11,13,17
/* function isPrime(num) {

    if (num < 1)
        return false;
    if (num == 2)
        return true;
    for (i = 3; num % i == 0; i++) {
        return false;
    }
} */
//reverse array using join()
/* function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("GeeksForGeeks")); */
//find largest element in array

/* function findLargestElement(arr) {

    let largest = arr[0];

    for (i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }

    }

    console.log(`Largest element in the array is ${largest}`);
}
findLargestElement([979, 66, 1, 2, 5]);

 */
//Using the spread operator (...) or Math.max

/* function findLargestElement(arr) {

    return Math.max(...arr);
}
console.log(findLargestElement([1, 2, 3, 4, 5]));
 */


/* function arrayOpeartions() {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //slice(2) removes first 2 elements from array
     arr = arr.slice(2);
    console.log(arr);

    // this starts from 1st element, counts till 4(excluding the 4th element)
    //output : [2,3,4]
    arr = arr.slice(1, 4);
    console.log(arr);

    arr = arr.slice(2, 5);

    arr.pop();

    console.log(arr);


}
arrayOpeartions();  */

//callback function

/* function fetchFile(callback) {

    setTimeout(() => {
        console.log("File is successfully fetched");
        callback();
    }, 4000);

}

function readFile() {

    console.log("Function to read the contents of the file!");
}

fetchFile(readFile);
 */
//Promise

/* function fetchFile() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("This function is to fetch a file!!");
            resolve();
        }, 4000);
    });

}

function readFile() {

    console.log("This function is to read a file!!");

}
fetchFile().then(readFile);


 */

//async- await

/* async function fetchFile() {

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("This function is to fetch the file!!");
            resolve();
        }, 4000);
    });
}
function readFile() {

    console.log("This funtion is to read the file!!");

}
await fetchFile();
readFile(); */

// using callback , using promise , using async - await
//=>all does the same job - it helps to execute the functions in the sequence that we want to


//The code defines an arrow function add that takes two arguments
// a and b and returns their sum (a + b). When console.log(add(6, 2)) is executed,
// it calls the add function with 6 and 2, and prints the result which is 8, to the console.

/* const add = (a, b) => { return a + b };
console.log(add(6, 2)); */

//Write a Program to add a property to an object
/* const obj = {
    name: "John",

}
obj.age = 21;              // adds new property
obj.course = "Engineering";

console.log(obj);

delete obj.course;       // deletes the property 

console.log(obj); */


/* The code uses the reduce method on the array [1, 2, 3] to sum its elements. 
It takes two parameters, a (accumulator) and b (current value), adding them together.
The final result 6 is printed to the console, representing the total of the array's numbers.

 *//* 

let arr = [1, 1, 1];
console.log(arr.reduce((a, b) => a + b )); */  //Normally adds all the elements in the array 

/* First iteration:
a = 5
b = 6
c = 1
5 + 6 + 1 = 12
👉 Second iteration:
a = 12
b = 7
c = 2
12 + 7 + 2 = 21
 */

/* let arr = [5, 6, 7];
console.log(arr.reduce((a, b, c) => a + b + c)); */
//op : 21
/* 
👉First iteration:
a = 5(accumulator)
b = 6(second element)
c = 1(index)
5 + 6 + 1 = 12
👉 Second iteration:
a = 12(previous result)
b = 7(3rd element)
c = 2(index)
12 + 7 + 2 = 21
 */


/* let arr = [5, 6, 7];
console.log(arr.reduce((a, b, c, d) => a + b + c + d));   // 4 arguments 
 */
/* 1️⃣ First iteration
a = 5(first element)
b = 6(second element)
c = 1(index of 6)
d = [5, 6, 7](the array itself)
a + b + c + d = 5 + 6 + 1 + [5, 6, 7]

⚠️ Adding an array to numbers in JS → array is converted to string:

5 + 6 + 1 + "5,6,7" = 12 + "5,6,7" = "125,6,7"

2️⃣ Second iteration
Now a = "125,6,7"(string from previous step)
b = 7
c = 2
d = [5, 6, 7]
a + b + c + d = "125,6,7" + 7 + 2 + [5, 6, 7] 

⚠️ All concatenated as string → "125,6,77,25,6,7" (output)
 */

//what will be the output of the given code ?
/* console.log(1 + '2'); // 12
console.log(typeof (1 + '2')); //String
console.log(typeof ('6' - 1)); //5 , number */

// Sum the elements of the array using loop 

/* let arr = [2, 4, 5, 7, 12, 1];
let sum = 0;
for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
}
console.log(sum); */

//factorial of a number
/* 
function factorial(num) {
    let fact = 1;
    for (let i = num; i > 0; i--) {
        fact = fact * i;
    }
    console.log(fact);
}

factorial(7); */

//find power of a number  3^3

/* function findPower(num, power) {

    // num = 2 
    //power = 3
    //2 * 2 * 2

    //num 2
    //power = 4
    // 2*2*2*2
    //((2*2)*2)*2
    let result = num;
    for (let i = 1; i <= power - 1; i++) {
        result = result * num;
    }
    return result;
}
console.log(findPower(9, 3));
 */

//Find frequency of each element in array

/* function elementFrequency(arr) {

    var unique = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        var count = 0;
        if (!(unique.includes(arr[i]))) {
            unique.push(arr[i]);

            for (let j = 0; j <= arr.length - 1; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                }
            }
            console.log(`${arr[i]} : ${count} number of times`);
        }
    }
}
elementFrequency([1, 3, 3, 5, 6, 7, 5, 6, 1, 2, 9, 3]); */

/* //output : 
//      1 : 2 times
        3 : 3 times 
        5 : 2 times
        6 : 2 times
        7 : 1 times */

//Write a Program to count the occurrences of a character in a string in JavaScript

//str = GeeksforGeeks

/* function charOccurence(str, searchChar) {

    let characters = str.split("");
    var count = 0;
    for (let i = 0; i <= characters.length - 1; i++) {
        if (characters[i] == searchChar) {
            count = count + 1;
        }
    }
    console.log(`${searchChar} is present ${count} number of times`);

}

charOccurence("geeksforgeeks", "e");
 */

// Sort array in ascending order 
// arr = {5,2,1,6,3,8,2,1,0}

// {0,1,1,2,2,3,5,6,8}


/* function sortArray(arr) {
    return arr.sort();
}
console.log(sortArray([0, 1, 1, 2, 2, 3, 5, 6, 8]));
 */

/* function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // swap the elements
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(sortArray([6, 7, 1]));
 */

// concatinate 2 arrays 

/* let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); */

// intersection of 2 arrays 

/* function arrayIntersection(arr1, arr2) {

    var interArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j] && !(interArr.includes(arr1[i]))) {
                interArr.push(arr1[i]);
            }
        }
    }
    console.log(interArr);
}

arrayIntersection([2, 3, 1, 3, 1, 2, 4], [5, 6, 1, 2, 3, 1, 7]);

 */

// union of 2 arrays 

//[1,2,3,4] [2,4,5,6,7]

/* function unionArray(arr1, arr2) {

    let arr3 = arr1.concat(arr2);
    var union = [];
    for (let i = 0; i < arr3.length; i++) {

        if (!(union.includes(arr3[i]))) {
            union.push(arr3[i]);
        }
    }
    console.log(union);
}
unionArray([1, 2, 3, 4, 5], [2, 3, 4, 5, 7]);
 */

/* function unionArray(arr1, arr2) {

    let arr3 = [...new Set([...arr1, ...arr2])];

    console.log(arr3);
}
unionArray([1, 2, 3], [4, 5, 6, 1]);

 */

/* function arrayMin(arr) {
    var min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);

}

arrayMin([0, 2, 3, 4, -1, 6]);
 */

//using Math.min
/* function findMin(arr) {
    return Math.min(...arr);// find minimum value
}

console.log(findMin([5, 10, -1, 8]));
 */

//find the repeated character in the string 
// appium : p is repeated 

/* function findRepeated(str) {

    let chararray = str.split("");
    console.log(chararray);


    for (let i = 0; i < chararray.length; i++) {

        var count = 0;

        for (let j = 0; j < chararray.length; j++) {
            if (chararray[i] == chararray[j]) {
                count = count + 1;

            }
        }
        if (count > 1 && chararray.indexOf(chararray[i]) === i) {
            console.log(`character ${chararray[i]} is repeated ${count} number of times`);

        }

    }



}

findRepeated("appium");
 */

let arr = [1, 2, 3, 4, 5];
let temp;
let n = 3;
for (let i = 0; i < n; i++) {

    temp = arr.pop();
    arr.unshift(temp);

}

console.log(arr);






