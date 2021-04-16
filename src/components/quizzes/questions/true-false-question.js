import React, {useState} from 'react'

const TrueFalseQuestion = ({question, index, userAttempts, setUserAttempts}) => {

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
                <li>
                    <label
                        className = {`list-group-item 
                            ${isCorrect !== null && question.correct === 'true' && 'list-group-item-success'}
                            ${isCorrect !== null && userAnswer === 'true' && userAnswer !== question.correct && 'list-group-item-danger'}`} >
                        <input type='radio' onClick={() => updateUserAnswer('true')} name={question._id}/> TRUE
                        {isCorrect !== null && question.correct === 'true' && <i className="fas fa-check checkIconColor float-right"></i>}
                        {isCorrect !== null && userAnswer !== question.correct && userAnswer === 'true' && <i className="fas fa-times crossIconColor float-right"></i>}
                    </label>
                </li>
                <li>
                    <label
                        className = {`list-group-item 
                            ${isCorrect !== null && question.correct === 'false' && 'list-group-item-success'}
                            ${isCorrect !== null && userAnswer === 'false' && userAnswer !== question.correct && 'list-group-item-danger'}`} >
                        <input type='radio' onClick={() => updateUserAnswer('false')} name={question._id}/> FALSE
                        {isCorrect !== null && question.correct === 'false' && <i className="fas fa-check checkIconColor float-right"></i>}
                        {isCorrect !== null && userAnswer !== question.correct && userAnswer === 'false' && <i className="fas fa-times crossIconColor float-right"></i>}
                    </label>
                </li>
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

export default TrueFalseQuestion;