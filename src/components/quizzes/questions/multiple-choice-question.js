import React, {useState} from 'react';

const MultipleChoiceQuestion = ({question, index, userAttempts, setUserAttempts}) => {

    const [userAnswer, setUserAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState(null)

    const updateUserAnswer = (answer) => {
        setUserAnswer(answer)
        userAttempts[index] = answer;
        setUserAttempts(userAttempts);
    }

    return (
        <div>
            <h3>{question.question}
                {isCorrect && <i className="fas fa-check checkIconColor"></i>}
                {isCorrect === false && <i className="fas fa-times crossIconColor"></i>}</h3>
            <ul className = 'list-group no-bullets'>
                {
                    question.choices.map((choice, index) =>
                        <li key = {index}>
                            <label
                                className = {`list-group-item 
                                    ${isCorrect !== null && question.correct === choice && 'list-group-item-success'}
                                    ${isCorrect !== null && userAnswer === choice && userAnswer !== question.correct && 'list-group-item-danger'}`} >
                                <input type='radio' onClick={() => updateUserAnswer(choice)} name={question._id}/> {choice}
                                {isCorrect !== null && question.correct === choice && <i className="fas fa-check checkIconColor float-right"></i>}
                                {isCorrect !== null && userAnswer !== question.correct && userAnswer === choice && <i className="fas fa-times crossIconColor float-right"></i>}
                            </label>
                        </li>)
                }
            </ul>
            <h6>Your Answer: {userAnswer}</h6>
            {/*<button onClick = {() => {*/}
            {/*    if (userAnswer === question.correct) {*/}
            {/*        setIsCorrect(true)*/}
            {/*    } else {*/}
            {/*        setIsCorrect(false)*/}
            {/*    }*/}
            {/*}}*/}
            {/*        className = 'btn btn-primary'>*/}
            {/*    Grade*/}
            {/*</button>*/}
        </div>
    )
}

export default MultipleChoiceQuestion;