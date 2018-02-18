import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const getQuestion = question => car(question);

const getCorrect = question => cdr(question);

export default (rules, makeQuestion) => {
  console.log('Welcome to the Brain Games!');
  if (rules) { console.log(rules); }
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (makeQuestion) {
    let counter = 0;
    while (counter < 3) {
      const question = makeQuestion();
      console.log(`Question: ${getQuestion(question)}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const correctAnswer = `${getCorrect(question)}`;
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
