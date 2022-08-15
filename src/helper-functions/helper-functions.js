export const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomId = (digitsNum = 12) =>
  Math.random()
    .toString()
    .slice(2, digitsNum + 2) * 1;
