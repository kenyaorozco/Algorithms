function plusMinus(arr) {
//   instantiate vars to keep track of the count
let countPlus = 0;
let countMinus = 0;
let countZero = 0;
//   loop thru arr
for (let i = 0; i < arr.length; i++) {
//   if num is greater than 0 its a positive num
    if (arr[i] > 0) {
        countPlus++;
//  else if num is less than 0 it's a negative num
    } else if (arr[i] < 0) {
        countMinus++;
//   else num is 0 
    } else {
        countZero++;
    }
}
return console.log((countPlus/arr.length).toFixed(6) +
    '\n' +
//  toFixed is a built in func and takes in a param of 6 that then rounds the decimal                     
    (countMinus/arr.length).toFixed(6) +
    '\n' +
    (countZero/arr.length).toFixed(6));
}
