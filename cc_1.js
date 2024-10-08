// Task 1 : Variables and Data Types

let employeeName = "Nara Smith"
const employeeID = 10023;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));




// Task 2 : Compound Data Types

let products = ["Table", "Chair", "Door"]; 
const productDetails = {
        name: products,
        price: 675.00,
        inStock: 12345.00, 
}

console.log(products, productDetails);




// Task 3 : Assignment Operators

let accountBalance = 123456.00;

accountBalance += 2345.00;
console.log(accountBalance);

accountBalance -= 3456.00;
console.log(accountBalance);

accountBalance *= 5.00;
console.log(accountBalance);

accountBalance /= 7.50;
console.log(accountBalance);

accountBalance %= 6.00;
console.log(accountBalance);




// Task 4 : Comparison Operators

let employeeScore1 = 9;
let employeeScore2 = 8; 

console.log ("employeeScore1 > employeeScore2:", employeeScore1 > employeeScore2);
console.log ("employeeScore1 < employeeScore2:", employeeScore1 < employeeScore2);
console.log ("employeeScore1 >= employeeScore2:", employeeScore1 >= employeeScore2);
console.log ("employeeScore1 <= employeeScore2:", employeeScore1 <= employeeScore2);
console.log ("employeeScore1 === employeeScore2:", employeeScore1 === employeeScore2);
console.log ("employeeScore1 !== employeeScore2:", employeeScore1 !== employeeScore2);




// Task 5 : Logical Operators

let hasKeyCard = true
let hasPermission = false

console.log (hasKeyCard && hasPermission);
console.log (hasKeyCard || hasPermission);
console.log (!hasPermission);




