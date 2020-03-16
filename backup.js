// Default

/* function add(num1, num2) {
    return num1 + num2;
}

const total = add(15, 17);

console.log(total);  */

// System-1

/* function add(num1, num2) {
    if (num2 == undefined) {
        num2 = 0;
    }
    return num1 + num2;
}

const total = add(15);

console.log(total); */

// System-2

/* function add(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}

const total = add(15, 1);

console.log(total); */

// System-3

function add(num1, num2 = 0) {
    return num1 + num2;
}

const total = add(15, 1);

console.log(total);