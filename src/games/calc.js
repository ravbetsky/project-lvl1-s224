import { cons, car, cdr } from 'hexlet-pairs';
import gameConstructor from '../index';
import getRandomInt from '../utils';

const makeExp = (operation, a, b) => cons(cons(operation, a), b);

const getOperation = exp => car(car(exp));

const getA = exp => cdr(car(exp));

const getB = exp => cdr(exp);

const getRandomOperation = () => {
  switch (getRandomInt(0, 2)) {
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return '+';
  }
};

const calc = (exp) => {
  const a = getA(exp);
  const b = getB(exp);
  switch (getOperation(exp)) {
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return a + b;
  }
};

export default () => {
  const rules = 'What is the result of the exp?';
  const makeQuestion = () => {
    const exp = makeExp(getRandomOperation(), getRandomInt(0, 20), getRandomInt(0, 20));
    const expString = `${getA(exp)} ${getOperation(exp)} ${getB(exp)}`;
    const correct = calc(exp);
    return cons(expString, correct);
  };
  gameConstructor(rules, makeQuestion);
};
