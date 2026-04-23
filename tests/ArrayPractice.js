//push() → add to end
//unshift() → add to beginning

//Write a program to reverse an array using only push()

/*function reverseUsingPush(arr) {

    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    console.log(reversed);
}

reverseUsingPush([1, 2, 3, 4, 5]);
*/
/*

function reverse_string(str) {

    let reversestr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversestr = reversestr + str[i];
    }
    console.log(reversestr);

}
reverse_string("hello");


 */
//reverse a string

/* function findMax(arr) {

    let maxEle = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxEle) {
            maxEle = arr[i];
        }
    }
    console.log(maxEle);

}
findMax([2, 6, 4]); */

/* function evenNum(arr) {

    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenArr.push(arr[i]);
        }
    }
    console.log(evenArr);
}

evenNum([1]);
 */

// input : Akshaya
// output : aKsHaYa

/* function caps(str) {

    //str = "Akshaya";
    str = str.toLowerCase();

    console.log(str);
    strCaps = str[0];

    for (let i = 1; i < str.length; i++) {


        if (!(i % 2 == 0)) {
            strCaps = strCaps + str[i].toUpperCase();
        }
        else {
            strCaps = strCaps + str[i];
        }

    }

    console.log(strCaps);

}

caps("Akshaya");*/




