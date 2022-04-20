import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import clientConnection from "../client";
import QuestionFrame from "./QuestionFrame";

function Game(props){
    const [questionInfo, setQuestionInfo] = useState({
        question_id: '',
        question_type: '',
        question_title: '',
        question_points: 0,
    })
    const [questionOptions, setQuestionOptions] = useState()
    const [infoTimer, setInfoTimer] = useState(0)
    const [infoScore, setInfoScore] = useState({
        scores: {}
    })

    const navigate = useNavigate();

    function handleQuestion(parseMessage) {
        setQuestionInfo(parseMessage)
        if (parseMessage.question_type === "button") {
            setQuestionOptions(parseMessage.question_options)
        }
    }

    clientConnection.onmessage = function (event) {
        const parseMessage = JSON.parse(event.data)
        if (parseMessage.type === "question") {
            handleQuestion(parseMessage)
        }
        else if (parseMessage.type === "lobby") {
            navigate("/lobby")
        }
        else if (parseMessage.type === "timer") {
            setInfoTimer(parseMessage.seconds_remaining)
        }
        else if (parseMessage.type === "score") {
            setInfoScore(parseMessage.scores)
        }
      }
    return (
        <QuestionFrame
            questionInfo={questionInfo}
            questionOptions={questionOptions}
            timer={infoTimer}
            scores={infoScore}
        />
        

        // <div>
        //     <h1> Trivia </h1>
        //     <h2>Username: {state.username}</h2>
        //     <div>
        //         {(questionInfo.id !== '') && 
        //         <div>
        //             <h2>Number: { questionInfo.question_id }</h2>
        //             <h4>Type: {questionInfo.question_type}</h4>
        //             <h4>¿{questionInfo.question_title}?</h4>
        //             <p></p>
        //             <p></p>
        //             <p></p>
        //             {(questionInfo.question_type === "button" && 
                        // questionInfo.question_options.map((item, key) => {
                        //     return <li key={key}>{item}</li>
                        // })
        //             )}
        //         </div>

        //         }

        //     </div>
        // </div>

    )
}

export default Game