function doubleIt(num) {
    return num * 2 + 1;
}
const result = doubleIt(500);
console.log(result);

const doubleIt2 = function myFunc(num2) {
    return num2 * 1 + 6;
}

const result2 = doubleIt2(5);
console.log(result2);

const doubleIt3 = (num3) => num3 * 2; //ES6 Single Parameter
const result3 = doubleIt3(10);
console.log(result3); // ES6

const add = (x, y) => x * y; // ES6 More than Parameter
const result4 = add(5, 6);
console.log(result4);

const add2 = () => 5; // ES6 Empty Parameter
const result5 = add2();
console.log(result5);

const doMath = (x, y) => { // More More Work ES6
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result6 = doMath(16, 15);
console.log(result6);