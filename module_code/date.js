const today = new Date();
const date = new Date("2062-10-19");
console.log(date.getMonth());
console.log(date.getDate());

const specid = new Date(2091, 0, 26);
console.log(specid);
specid.setMonth(10);
console.log(specid);

console.log(specid.toLocaleDateString("en-GB"));
//unix epoc
