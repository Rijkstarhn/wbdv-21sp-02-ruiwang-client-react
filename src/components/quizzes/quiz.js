import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Question from "./questions/question";
import questionService from '../../services/question-service'

const Quiz = () => {

    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [userAttempts, setUserAttempts] = useState([])

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId).then(questions => setQuestions(questions))
    }, [])

    const submitAttempt = () => {
        // post questions and attempts to server
        let attemptsAndQuestions = {};
        attemptsAndQuestions.attempts = userAttempts;
        attemptsAndQuestions.questions = questions;
        fetch(`http://localhost:4000/api/quizzes/${quizId}/attempts`, {
                method: 'POST',
                body: JSON.stringify(attemptsAndQuestions),
                headers: {
                    'content-type': 'application/json'
                }
            }
        ).then(response => response.json())
            .then(result => console.log(result))
    }

    return (
        <div className = 'container-fluid'>
            <h3 className = 'form-group editIconColor'>Quiz {quizId}</h3>
            <button className = "btn btn-primary" onClick = {() => submitAttempt()}>Submit</button>
            <p></p>
            <ul className = 'list-group'>
                {
                    questions.map((question, index) =>
                        <li className = 'list-group-item' key = {index}>
                            <Question question = {question} index = {index} userAttempts = {userAttempts} setUserAttempts = {setUserAttempts}/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Quiz;