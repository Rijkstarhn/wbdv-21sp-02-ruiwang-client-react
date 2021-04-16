import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, index, userAttempts, setUserAttempts}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    index = {index}
                    userAttempts = {userAttempts}
                    setUserAttempts = {setUserAttempts}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question = {question}
                    index = {index}
                    userAttempts = {userAttempts}
                    setUserAttempts = {setUserAttempts}/>
            }
        </div>
    )
}

export default Question;