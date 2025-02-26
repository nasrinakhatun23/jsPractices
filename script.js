// 1- find lenght of string
// let string = "Nasrina khatun";
// let lengthOfString = string.length;

// console.log(lengthOfString);
 

// 2- charAt() to find the position of a specific alphabet-
// let naam = "Nasrina";
// let PositionOfCharacter = naam.charAt(2);
// console.log(PositionOfCharacter);


// 3- CharCodeAt to find the character code.
// let naam = "Nasrina";
// let CodeOfcharacter = naam.charCodeAt(4);
// console.log(CodeOfcharacter);


// 4- slice (start, end)
// let  naam = "Nasrina khatun";
// let requiredValue = naam.slice(0,5);
// console.log(requiredValue)


// 5- Substring (similar to slice)
// let naam = "Nasrina khatun";
// let requiredValue = naam.substring(0,9);
// console.log(requiredValue);


// 6- Substr (start,end)  
// let naam = "Nasrina khatun";
// let requiredValue = naam.substr(1,5);
// console.log(requiredValue);


// let number = "013456789";
// let result = number.substr(4,9);
// console.log(result);


// let naam = "nasrina khatun";
// let requiredValue = naam.substr(8);
// console.log(requiredValue);



// 7- touppercase (capital kar dega)
// let naam = "nasrina";
//  let bag = naam.toUpperCase();
//  console.log(bag);


// 8- toLowerCase (small letter kar dega)
// let naam = "NASRINA";
// let bag = naam.toLowerCase();
// console.log(bag);


// 9- concatenate mean(adding of two string);
//concat
// let firstnaam = "Nasrina";
// let lastnaam = "khatun";
// let fullnaam = firstnaam.concat(" ",lastnaam);
// console.log(fullnaam);


// let firstnaam = "Nasrina";
// let lastnaam = "khatun";
// let fullnaam = firstnaam.concat(lastnaam);
// console.log(fullnaam);


// 10- trim(remove the white space)
// let firstnaam = " Nas ";
// console.log(firstnaam.length);
// let trimValue = firstnaam.trim();
// console.log(trimValue.length);


//trim(space remove karega)
// let firstnaam = "    Nasrin   ";
// let trimvalue =  firstnaam.trim();
// console.log(trimvalue);


// 11-trimstart(in first ye space nhi dekhega shidha print kar dega)
// let naam = "      Nasina";
// let trimvalue = naam.trimStart();
// console.log(trimvalue);


// 12- trimend(in last ye space nhi dekhega shidha print kar dega )
// let naam = "Nasrina    ";
// let trimValue = naam.trimEnd();
// console.log(trimValue);


// 13- padstart(10 liya hain to 10 lega starting se line main)
// let naam = "Nasrina";
// let padvalue = naam.padStart(10,"*");
// console.log(padvalue);


// 14- padend(10 liya hain 10 lega end main line se)
// let naam = "Nasrina";
// let padvalue = naam.padEnd(10,"z");
// console.log(padvalue);

//15- repeat
// let naam = "Nasrina";
// let result = naam.repeat(3);
// console.log(result);




// forEach() method
// let array =["apple","banana","orange"];

// array.forEach(function(element){
//     console.log(element)
// })


// let fruits=["appale","banana","orangr","grapes"];
// fruits.forEach(element =>  console.log(element));


// let fruits =["apple","banana","grepes","lichi"];
// fruits.forEach(function(element){
//     console.log(element);
// });


// let number =[1,2,3,4,5];
// number.forEach(function(element){
//     console.log(element);
// });


// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// numbers.forEach(function(number) {
//   sum += number;
// });

// console.log("Sum:", sum); // Output: Sum: 15



// let number =[1,2,3,4,5];
// let sum = 0;
//  number .forEach(function(element){
//   sum += element;
//  });
//  console.log("sum",sum);


// let number =[1,2,3,4,5];
// let pro = 1;
//  number.forEach(function(element){
//   pro *= element;
//  });
//  console.log("pro",pro);


// map() method
// let number= [1,2,3,4,5];
// let doubleNumber = number.map(function(number){
// return  number*2;
// });

// console.log(doubleNumber);

// let numbers =[1,2,3,4,5];
// let incrementedNumber = numbers.map(function(number){
//     return  number +1;
// });
// console.log(incrementedNumber);



// filter () method

// let words = ["lal","banana","grapes","lichi"];
// let longwords = words.filter(function(word){
//     return word.length>3;
// });
// console.log(longwords);


// let numbers = [1,2,3,4,5,6];
// let evenNumbers = numbers.filter(function(number){
//     return number % 2==0;
// })
// return console.log(evenNumbers);


// reduce() method
// let numbers = [1,2,3,4,5];
// let sum = numbers.reduce(function(acumulator,currentvalue){
//     return acumulator+currentvalue;
// },0);
// console.log(sum);

//   forEach
// let fruits = ["apple","banana","orange"];
// let  arrayfruits = fruits.forEach(function(fruit){
//     console.log(fruit);
// })

// let numbers = [1,2,3,4,5];
//  let sum = 0;
//   numbers.forEach(function(element){
//     sum+=element;
//   });
//   console.log("sum",sum);

// let num=[1,2,3,4];
// let sum=0;
// num.forEach(function(element){
//     sum+=element;
// });
// console.log("sum",sum)


// map
// let numbers=[1,2,3,4,5];
// let doubleNumber=numbers.map(function(element){
//     return element*2;
// });
// console.log(doubleNumber);

// let number = [1,2,3,4,5];
// let incrementedNumber =number.map(function(element){
//     return  element+1;
// });
// console.log(incrementedNumber);



// let number = [1,2,3,4,5,6];
// let  evenNumber = number.filter(function(numbers){
//     return numbers%2==0;
// });
// console.log(evenNumber);


// let  words= ["apple","lal","banana"];



    









// let arr=[1,2,3,4]
// let a=arr.filter(function(num){
//     if (num.arr!=num){
//         return num
//     }
// }) 
// console.log(a)


// const num = ()=>{
//     console.log("hello world");
// };`


// function reverse(num){
//     let r = 0;
//     while(num>0){
//         let a = num % 10;
//         r = r * 10 + a;
//         num = Math.floor(num/10);
//     }
//     return r;
// }
// console.log(reverse(123));




function sum(num){
    let sum = 0;
    while(num>0){
        let a = num % 10;
        sum = sum + a;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(sum(123));





















