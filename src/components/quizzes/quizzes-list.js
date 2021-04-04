import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import quizService from '../../services/quiz-service';
// import {connect} from 'react-redux';

const QuizzesList = ({findQuizzesForCourse}) => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        quizService.findAllQuizzes().then(resQuizzes => setQuizzes(resQuizzes))
    }, [])

    return (
        <div className = 'container-fluid'>
            <h3 className = 'form-group editIconColor'>Quizzes</h3>
            <ul className = 'list-group'>
                {
                    quizzes.map((quiz, index) =>
                        <li className = 'list-group-item' key = {index}>
                            <Link to ={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                {quiz.title}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

// const findQuizzesForCourse = () => {
//
// }

// const stpm = (state) => {
//     return {
//         myQuizzes: state.quizzesReducer.quizzes
//     }
// }
//
// const dtpm = () => {
//
// }

// export default connect(stpm, dtpm)(QuizzesList);
export default QuizzesList;