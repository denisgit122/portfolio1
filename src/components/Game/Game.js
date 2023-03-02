const Game = ({ questions,question, step, onClick}) => {
const percentage=Math.round(  step/questions.length*100)

    return (
            <>
                <div className="progress">
                    <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
                </div>
                <h1>{question.title}</h1>
                <ul>
                    {
                        question.variants.map((value,index) => <li onClick={()=>onClick(index)} key={index}> {value}</li>)
                    }
                </ul>
            </>
        );


};

export {Game};