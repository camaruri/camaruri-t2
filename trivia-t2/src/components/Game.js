import React, { useState } from "react";

import { useNavigate, useLocation} from "react-router-dom";

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
    const [infoTimer, setInfoTimer] = useState()
    const [infoScore, setInfoScore] = useState()

    const navigate = useNavigate();
    const {state} = useLocation();
    clientConnection.onmessage = function (event) {
        console.log(event.data);
        const parseMessage = JSON.parse(event.data)
        if (parseMessage.type === "question") {
            setQuestionInfo(parseMessage)
            if (parseMessage.question_type === "button") {
                console.log("Get inside the button options and the quesiton options arer;:", parseMessage.question_options)
                setQuestionOptions(parseMessage.question_options)
            }
        }
        else if (parseMessage.type === "lobby") {
            console.log("get inside lobby rredirect", parseMessage)
            navigate("/", {state: {isLoggedIn: true, username: state.username}})
        }
        else if (parseMessage.type === "lobby") {

        }
      }
    return (
        <QuestionFrame
            questionInfo={questionInfo}
            questionOptions={questionOptions}
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
        //                 questionInfo.question_options.map((item, key) => {
        //                     return <li key={key}>{item}</li>
        //                 })
        //             )}
        //         </div>

        //         }

        //     </div>
        // </div>

    )
}

export default Game