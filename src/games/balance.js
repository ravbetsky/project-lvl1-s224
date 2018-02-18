import { cons } from 'hexlet-pairs';
import { getRandomInt, getExtrema, getExMin, getExMax, isSortedNum } from '../utils';
import gameConstructor from '../index';

const balance = (n) => {
  const extrema = getExtrema(n);
  const min = getExMin(extrema);
  const max = getExMax(extrema);
  if ((max - min) <= 1 && isSortedNum(n)) {
    return n;
  }
  let str = String(n);
  for (let i = 0; i < str.length; i += 1) {
    const digit = Number(str[i]);
    if (digit === max) {
      str = str.substring(0, i) + (digit - 1) + str.substring(i + 1);
      break;
    }
  }
  for (let i = str.length - 1; i >= 0; i -= 1) {
    const digit = Number(str[i]);
    if (digit === min) {
      str = str.substring(0, i) + (digit + 1) + str.substring(i + 1);
      break;
    }
  }
  return balance(Number(str));
};

export default () => {
  const rules = 'Balance the given number.';
  const makeQuestion = () => {
    const num = getRandomInt(100, 5000);
    const numString = `${num}`;
    const correct = balance(num);
    return cons(numString, correct);
  };
  gameConstructor(rules, makeQuestion);
};
