import gameConstructor, { makeQuestion } from '../index';
import getRandomInt from '../utils';

export default () => {
  const generator = () => getRandomInt(0, 99);
  const correct = n => (n % 2 === 0 ? 'yes' : 'no');
  const toString = question => `${question}`;
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  gameConstructor(rules, makeQuestion(generator, toString, correct));
};
