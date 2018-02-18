import { cons } from 'hexlet-pairs';
import { getRandomInt } from '../utils';
import gameConstructor from '../index';

export default () => {
  const rules = 'Is this number prime?';
  gameConstructor(rules);
};
