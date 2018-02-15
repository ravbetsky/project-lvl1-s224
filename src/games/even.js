import gameConstructor from '../index';
import getRandomInt from '../utils';

const getCorrect = num => (num % 2 === 0 ? 'yes' : 'no');

const getQuestion = () => getRandomInt(0, 99);

const toString = question => question;

export default () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  const attempts = 3;
  gameConstructor(rules, attempts, getQuestion, toString, getCorrect);
};
