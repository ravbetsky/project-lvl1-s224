import { cons, car, cdr } from 'hexlet-pairs';
import gameConstructor, { makeQuestion } from '../index';
import getRandomInt from '../utils';

const makePair = (a, b) => cons(a, b);

const getA = pair => car(pair);

const getB = pair => cdr(pair);

const gcd = (a, b) => {
  if (b === 0) { return a; }
  return gcd(b, a % b);
};

export default () => {
  const generator = () => makePair(getRandomInt(1, 20), getRandomInt(1, 20));
  const correct = pair => `${gcd(getA(pair), getB(pair))}`;
  const toString = pair => `${getA(pair)} ${getB(pair)}`;
  const rules = 'Find the greatest common divisor of given numbers.';
  gameConstructor(rules, makeQuestion(generator, toString, correct));
};
