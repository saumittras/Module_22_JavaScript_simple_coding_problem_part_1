// 12 inches equal 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch. ";
  return result;
}

console.log(inchToFeet2(75));

function mile2km(mile) {
  const km = mile * 1.60934;
  return km;
}

function km2mile(km) {
  const mile = km / 1.60934;
  return mile;
}
