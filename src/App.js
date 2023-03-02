import './App.css';
import {useState} from "react";

import {Game} from "./components/Game/Game";
import {Result} from "./components/Result/Result";

const questions = [
    {
        title: 'React - це ... ?',
        variants: ['бібліотека', 'фреймворк', 'програма'],
        correct: 0,
    },
    {
        title: 'Компонент - цу ... ',
        variants: ['програма', 'частина програми або сторінки ', 'те, що я знав, але забув'],
        correct: 1,
    },
    {
        title: 'Що таке JSX?',
        variants: [
            'Це просто HTML',
            'Це функція',
            'Це те саме що HTML, але з  можлиістю виконувати JS-код',
        ],
        correct: 2,
    },
    {
        title: 'Що таке Angular?',
        variants:  ['бібліотека', 'фреймворк', 'програма'],
        correct: 1,
    },
];

function App() {
    const [step, setStep]=useState(0)
    const [correct, setCorrect]=useState(0)

    const question=questions[step]
    const onClick=(index)=>{
        setStep(step+1)

        if (index===question.correct){
         setCorrect(correct+1)
        }else {setCorrect(correct)}
    }

    return (
        <div className="App">
            {step !== questions.length ?
                <Game step={step} questions={questions} question={question} onClick={onClick}/>
            :   <Result setCorrect={setCorrect} setStep={setStep}  correct={correct} questions={questions}  />
            }
        </div>
    );
}

export default App;
