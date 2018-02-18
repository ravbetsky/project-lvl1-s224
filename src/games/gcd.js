import { cons, car, cdr } from 'hexlet-pairs';
import gameConstructor from '../index';
import getRandomInt from '../utils';

const makePair = (a, b) => cons(a, b);

const getA = pair => car(pair);

const getB = pair => cdr(pair);

const gcd = (a, b) => {
  if (b === 0) { return a; }
  return gcd(b, a % b);
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const makeQuestion = () => {
    const pair = makePair(getRandomInt(1, 20), getRandomInt(1, 20));
    const pairString = `${getA(pair)} ${getB(pair)}`;
    const correct = gcd(getA(pair), getB(pair));
    return cons(pairString, correct);
  };
  gameConstructor(rules, makeQuestion);
};
