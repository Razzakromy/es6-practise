const ages = [10, 12, 15];
const ages2 = [16, 18];
const ages3 = [17, 20];

const allAges = ages.concat(ages2).concat(ages3).concat([30]);
console.log(allAges);

const ages4 = [12, 15, 14];
const ages5 = [11, 19];
const ages6 = [18, 22];

const allAges2 = [...ages4, ...ages5, 5, ...ages6]
console.log(allAges2); // ES6

const takaPoisa = [850, 650, 4580, 1552];
const maximum = Math.max(...takaPoisa); // ES6
console.log(maximum);