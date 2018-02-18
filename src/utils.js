import { cons, car, cdr } from 'hexlet-pairs';

export const getRandomInt = (min, max) => Math.floor((Math.random() * ((max - min) + 1)) + min);

export const getExtrema = (n) => {
  const str = String(n);
  let max = 0;
  let min = Number(str[0]);
  for (let i = 0; i < str.length - 1; i += 1) {
    const digit = Number(str[i]);
    if (digit > max) {
      max = digit;
    } else if(digit < min) {
      min = digit;
    }
  }
  return cons(min, max);
}

export const getExMin = (extrema) => car(extrema);

export const getExMax = (extrema) => cdr(extrema);

export const isSortedNum = (n) => {
  const str = String(n);
  for(let i = 1; i < str.length - 2; i += 1) {
    if (Number(str[i - 1]) > Number(str[i]) || Number(str[i]) > Number(str[i + 1])) {
      return false;
    }
  }
  return true;
}