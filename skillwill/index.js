
// 1 davalebis 1*

function compare(a, b) {
    if (a === b) {
        return "EQUAL";
    } else {
        return "NOT EQUAL";
    }}

    console.log(compare(5, 7))
    console.log(compare(5, 5))


// 1 davaleba 2*

    function Celsius(fahrenheit) {
        if (typeof fahrenheit !== 'number') {
            return false;
        }
        return (fahrenheit - 32) * 5 / 9;
    }
    
    console.log(Celsius(32)); 
    console.log(Celsius(20));
    console.log(Celsius(200));  
    console.log(Celsius('not a number')); 


//1 davaleba 3* 

function calculate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
            default:
            return false;
    }
}


console.log(calculate(5, 3, '+'));
console.log(calculate(5, 3, '-')); 
console.log(calculate(5, 3, '*')); 
console.log(calculate(5, 3, '/')); 
console.log(calculate(5, 3, '%')); 
