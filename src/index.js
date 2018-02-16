import { cons, car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export const makeQuestion = (gen, toString, check) => cons(cons(gen, toString), check);

const getGenerator = question => car(car(question));

const getChecker = question => cdr(question);

const getStringify = question => cdr(car(question));

export default (rules, question) => {
  console.log('Welcome to the Brain Games!');
  if (rules) { console.log(rules); }
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (question) {
    let counter = 0;
    while (counter < 3) {
      const generation = getGenerator(question)();
      console.log(`Question: ${getStringify(question)(generation)}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const correctAnswer = getChecker(question)(generation);
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        counter += 1;
      } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        console.log(`Let's try again, ${name}!`);
        counter = 0;
      }
    }
    console.log(`Congratulations, ${name}!`);
  }
};
