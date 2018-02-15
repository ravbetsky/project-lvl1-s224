import readlineSync from 'readline-sync';

export default (rules, attempts, getQuestion, getCorrect) => {
  console.log('Welcome to the Brain Games!');
  if (rules) { console.log(rules); }
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (attempts) {
    let counter = 0;
    while (counter < attempts) {
      const question = getQuestion();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const correctAnswer = getCorrect(question);
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        counter += 1;
      } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        console.log(`Let's try again, ${name}!`);
        counter = 0;
      }
    }
  }
  if (rules) { console.log(`Congratulations, ${name}!`); }
};
