//  This is a simple CLI calculator

const num1 = parseFloat(prompt('Enter the First Number: '));
const operator_type = prompt("Enter operator symbol among the following => ( *, /, +, -, % ): ")
const num2 = parseFloat(prompt('Enter the Second Number: '));

let result;

switch(operator_type) {
    case '*':
        result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;
    case '/':
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;
    case '+':
       result = num1 + num2;
       console.log(`${num1} + ${num2} = ${result}`);
       break;
    case '-':
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    case '%':
        result = num1 % num2;
        console.log(`${num1} % ${num2} = ${result}`);
        break;
    default:
        result= "Invalid entry. Try again and make sure you have entered NUMBERS ONLY and a Valid OPERATOR. "
    
}

console.log("To perform another calculation, refresh the page by hitting F5 key.");
// 