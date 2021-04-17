import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import attemptService from '../../services/attempt-service';

const Attempt = () => {

    const {quizId} = useParams()
    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        attemptService.findAttemptsByQuizId(quizId)
            .then(attempts => setAttempts(attempts))
    })

    return (
        <div className = 'container-fluid'>

            <h1 className = 'editIconColor'>Attempt History</h1>
            <ol className = 'list-group'>
                {
                    attempts.map((attempt, index) =>
                        <li className = 'list-group-item' key = {index}>
                            Attempt: {index + 1}
                            <br/>
                            Score:{attempt.score}
                            <br/>
                            Your answers: {attempt.answers.map((answer, index) => (
                                <li className = 'list-group-item' key = {index}>
                                    No.{index+1}: {answer}
                                </li>
                        ))}
                        </li>
                    )
                }
            </ol>
        </div>
    )
}

export default Attempt;