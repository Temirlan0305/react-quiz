import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct, onClickRestart }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>{`Вы отгадали ${correct} ответа из ${questions.length}`}</h2>
      <button onClick={onClickRestart}>Попробовать снова</button>
    </div>
  );
}

function Game({ step, question, onClickVariants }) {
  const persentage = Math.round((step / questions.length) * 100);
  // console.log(persentage);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${persentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((obj, index) => (
          <li onClick={() => onClickVariants(index)} key={obj}>
            {obj}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  const onClickVariants = (index) => {
    setStep(step + 1);
    if (question.correct === index) {
      setCorrect(correct + 1);
    }
  };
  const onClickRestart = () => {
    setCorrect(0);
    setStep(0);
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} onClickVariants={onClickVariants} step={step} />
      ) : (
        <Result correct={correct} onClickRestart={onClickRestart} />
      )}
    </div>
  );
}

export default App;
