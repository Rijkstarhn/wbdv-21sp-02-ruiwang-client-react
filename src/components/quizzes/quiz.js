import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Question from "./questions/question";
import questionService from '../../services/question-service';
import attemptService from '../../services/attempt-service';

const Quiz = () => {

    const {courseId, quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [userAttempts, setUserAttempts] = useState([])
    const [score, setScore] = useState('     ')
    const [isCorrect, setIsCorrect] = useState([])

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId).then(questions => {
            setQuestions(questions);
            let isCorrectInitial = [];
            questions.forEach((question, index) => isCorrectInitial[index] = null)
            setIsCorrect(isCorrectInitial)
        })
    }, [])

    const processResult = (result) => {
        // console.log(result);
        setScore(result.score);
        let isCorrectFromAttempt = [];
        for (let i = 0; i < questions.length; i++) {
            isCorrectFromAttempt[i] = result.answers[i] === questions[i].correct;
        }
        // console.log('isCorrect:', isCorrectFromAttempt);
        setIsCorrect(isCorrectFromAttempt)
    }

    const submitAttempt = () => {
        // post questions and attempts to server
        let attemptsAndQuestions = {};
        attemptsAndQuestions.attempts = userAttempts;
        attemptsAndQuestions.questions = questions;
        attemptService.postAttemptsByQuizId(quizId, attemptsAndQuestions)
            .then(result => processResult(result))
    }

    return (
        <div className = 'container-fluid'>
            <p></p>
            <div className = 'row'>
                <div className = 'col-4'>
                    <h3 className = 'form-group editIconColor'>Quiz {quizId}</h3>
                </div>
                <div className = 'col-8'>
                    <h3 className= 'float-right'>Score: {score}</h3>
                </div>
            </div>
            <button className = "btn btn-primary" onClick = {() => submitAttempt()}>Submit</button>
            <Link to = {`/courses/${courseId}/quizzes/${quizId}/attempts`}  className = "btn btn-primary quizButtonMargin">View History</Link>
            <Link to = {`/courses/${courseId}/quizzes`}  className = "btn btn-primary quizButtonMargin">Back</Link>
            <p></p>
            <ul className = 'list-group'>
                {
                    questions.map((question, index) =>
                        <li className = 'list-group-item' key = {index}>
                            <Question
                                question = {question}
                                index = {index}
                                isCorrect ={isCorrect[index]}
                                userAttempts = {userAttempts}
                                setUserAttempts = {setUserAttempts}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Quiz;