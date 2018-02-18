import { cons } from 'hexlet-pairs';
import { getRandomInt, isPrime } from '../utils';
import gameConstructor from '../index';

export default () => {
  const rules = 'Is this number prime?';
  const makeQuestion = () => {
    const num = getRandomInt(1, 99);
    const correct = isPrime(num) ? 'yes' : 'no';
    return cons(num, correct);
  };
  gameConstructor(rules, makeQuestion);
};
