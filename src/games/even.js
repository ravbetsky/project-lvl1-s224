import { cons } from 'hexlet-pairs';
import gameConstructor from '../index';
import getRandomInt from '../utils';

export default () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  const makeQuestion = () => {
    const num = getRandomInt(0, 99);
    const numString = `${num}`;
    const correct = num % 2 === 0 ? 'yes' : 'no';
    return cons(numString, correct);
  };
  gameConstructor(rules, makeQuestion);
};
