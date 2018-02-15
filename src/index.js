import readlineSync from 'readline-sync';
import getRandomInt from './utils';

const askQuestion = question => readlineSync.question(question);

const getName = () => askQuestion('May I have your name? ');

const showWelcome = () => console.log('Welcome to the Brain Games!');

const sayHello = name => console.log(`Hello, ${name}!`);

export const evenGame = () => {
  showWelcome();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = getName();
  sayHello(name);
  let counter = 0;
  while (counter < 3) {
    const randomInt = getRandomInt(0, 99);
    console.log(`Question: ${randomInt}`);
    const userAnswer = askQuestion('Your answer: ');
    const correctAnswer = randomInt % 2 === 0 ? 'yes' : 'no';
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
};

export default () => {
  showWelcome();
  const name = getName();
  sayHello(name);
};

