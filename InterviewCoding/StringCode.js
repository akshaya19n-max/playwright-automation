//1️⃣ find number of times a character appears in a string

/* function charCount(str) {

    var uniqueChar = [];
    for (let i = 0; i < str.length; i++) {
        var count = 0;

        if (!(uniqueChar.includes(str[i]))) {
            uniqueChar.push(str[i]);

            for (let j = 0; j < str.length; j++) {
                if (str[i] === str[j]) {
                    count++
                }
            }

            console.log(`character ${str[i]} is present ${count} number of times`);
        }
    }

}


charCount("akshaya automation engineer");

 */

//2️⃣ reverse a single word 

/* function reverseStr(str) {

    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr = revStr + str[i];
    }
    console.log(revStr);

}

reverseStr("Akshaya"); */

//3️⃣ reverse each word in a sentence

/* function reverseEachWord(sentence) {

    let words = sentence.split(" ");

    let result = []

    for (let word of words) {
        let reversed = "";
        for (let i = word.length - 1; i >= 0; i--) {
            reversed = reversed + word[i];
        }
        result.push(reversed);
    }
    return result.join(" ");

}
console.log(reverseEachWord("Akshaya automation Engineer"));
 */

//4️⃣ reverse alternate words

/* function reverseAlternateWords(sentence) {
     //words = ["Akshaya", "Automation", "Engineer"]
    let result = [];
    let index = 0;

    for (let word of words) {
        if (index % 2 === 0) {   
            let reversed = "";

            for (let i = word.length - 1; i >= 0; i--) {
                reversed += word[i];
            }

            result.push(reversed);
        } else {
            result.push(word);
        }

        index++; // manually increment index
    }

    return result.join(" ");
}

console.log(reverseAlternateWords("Akshaya automation engineer"));

 */

//5️⃣ find the vowels in the sentence

/* function findVowels(sentence) {

    let chararry = sentence.toLowerCase().split("");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let unique = [];
    for (let i = 0; i < chararry.length; i++) {

        if (vowels.includes(chararry[i]) && !(unique.includes(chararry[i]))) {

            unique.push(chararry[i]);
            console.log(`the sentence contains the vowel ${chararry[i]}`);

        }
    }
}
findVowels("europe"); */

//6️⃣Unique letters in a sentence
/* 
function uniqueChar(sentence) {

    let chararry = sentence.split("");
    let unique = [];

    for (let i = 0; i < chararry.length; i++) {
        if (!(unique.includes(chararry[i])))
            unique.push(chararry[i]);
    }
    console.log(unique)

}
uniqueChar("aaaabbbbbbbc"); */

//7️⃣check is the string is pallindrome

/* function pallindrome(str) {

    let reversedString = str.split("").reverse().join("");

    console.log(str);
    console.log(reversedString);

    if (str == reversedString) {
        console.log("string is pallindrome");
    }
    else {
        console.log("string is not pallindrome");
    }

}
pallindrome("aba"); */

//8️⃣count the number of vowels 

/* function countVowels(str) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let charAry = str.split("");

    let count = 0;
    let unique = []
    for (let i = 0; i < charAry.length; i++) {
        if (vowels.includes(charAry[i]) && !(unique.includes(charAry[i]))) {
            unique.push(charAry[i]);
            count++


        }
    }
    return count;

}

console.log(countVowels("hi my name is akshaya"));

 */

//9️⃣ remove duplicate characters 
/* 
function removeDuplicate(str) {

    return [...new Set(str)].join('');

}
console.log(removeDuplicate("akshaya")); */

//another way 

/* function removeDuplicate(str) {

    let unique = []
    for (let i = 0; i < str.length; i++) {
        if (!(unique.includes(str[i]))) {
            unique.push(str[i]);
        }

    }
    return unique.join("");
}

console.log(removeDuplicate("akshaya")); */

//🔟 check if strings are anagram 

/* function anagram(str1, str2) {

    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");

    if (str1 === str2) {
        console.log("Strings are anagram");
    } else {
        console.log("strings are not anagram")
    }


}
anagram("silent", "listen"); */

//1️⃣1️⃣ capitalise first letter

function capitalizeFirstChar(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}






console.log(capitalizeFirstChar("hi my name is akshaya"));
