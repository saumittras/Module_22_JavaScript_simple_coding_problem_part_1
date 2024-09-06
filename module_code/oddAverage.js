function oddAvg(numbers) {
  let sum = 0;
  let oddNum = 0;
  for (const element of numbers) {
    if (element % 2 === 1) {
      sum += element;
      oddNum++;
    }
  }
  const result = sum / oddNum;
  return result;
}
const arrar_1 = [3, 5, 4, 6, 7, 8, 9, 11, 13];

// const avarege = sum / array.length;
// return avarege;

console.log(oddAvg(arrar_1));
