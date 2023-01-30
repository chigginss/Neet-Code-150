// Map Questions and Solutions

/*
  Use the 'runner' function below to
  run your code before submitting it.
*/
export function runner() {
  const array = [1, 2, 3, 4, 5];
  console.log(squareArray(array));
}

/*
  Use array.map to return a new array with the same number of elements as the original array, 
  but with each element squared (multiplied by itself)
  @param {number[]} array
  @returns {number[]}
*/
export function squareArray(array) {
  // throw new Error("Implement the squareArray function");
  return array.map(x => x * x);
}

/*
  Use array.map create a new array of objects but with only the name and age properties
  @param {object[]} array
  @returns {object[]}
*/
export function getNamesAndAges(array) {
  // throw new Error("Implement the getNamesAndAges function");
  return array.map(x => {
    const name = x.name;
    const age = x.age;
    return {'name': name, 'age': age};
  });
}

/*
  Given an array of crypto currency objects, use array.map to return a new array of objects
  that create a new property called 'value' which is the product of the 'price' and 'amount' properties
  @param {object[]} array
  @returns {object[]}
*/
export function getTotalValue(array) {
  return array.map(x => {
    const price = x.price;
    const amount = x.amount;
    const value = price * amount;
    return {'name': x.name, 'value': value};
  });
}

/*
  Given an array of crypto currency objects and an object of fiat currencies,
  use array.map to return a new array of objects that create a new property called 'value' 
  which is the product of the fiat 'price' and crypto 'amount' properties
  @param {object[]} array
  @param {object} fiat
  @param {string} currencyName
  @returns {object[]}
*/
export function getTotalValueInFiat(array, fiat, currencyName) {

  return array.map(x => {
    const fiatPrice = fiat[currencyName];
    const cryptoPrice = x.price;
    const cryptoAmount = x.amount;
    const value = fiatPrice * cryptoPrice * cryptoAmount;
    return {'name': x.name, 'value': value};
  });
}
