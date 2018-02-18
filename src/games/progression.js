import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../utils';
import gameConstructor from '../index';

export default () => {
  const rules = 'What number is missing in this progression?';
  const makeQuestion = () => {
    const length = 10;
    const first = getRandomInt(0, 10);
    const delta = getRandomInt(1, 10);
    const missingIndex = getRandomInt(0, length - 1);
    const correct = first + (missingIndex * delta);
    let question = '';
    for (let i = 0; i < length; i += 1) {
      const next = i === missingIndex ? '..' : first + (i * delta);
      question += `${next} `;
    }
    return cons(question, correct);
  };
  gameConstructor(rules, makeQuestion);
};
