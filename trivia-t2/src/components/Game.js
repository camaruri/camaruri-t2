import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import clientConnection from "../client";
import QuestionFrame from "./QuestionFrame";
import ScoreBoard from "./Scoreboard";
import Streak from "./Streak";
import Winners from "./Winners";

function Game(props){
    const [questionInfo, setQuestionInfo] = useState({
        question_id: '',
        question_type: '',
        question_title: '',
        question_points: 0,
    })
    const [questionOptions, setQuestionOptions] = useState()
    const [infoTimer, setInfoTimer] = useState(0)
    const [infoScore, setInfoScore] = useState()
    const [streak, setStreak] = useState({
        username: '',
        streak: 0
    })
    const [winners, setWinners] = useState(false)
    const [winnersScore, setWinnersScore] = useState({})

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
        else if (parseMessage.type === "highscore") {
            setWinners(true)
            setWinnersScore(parseMessage.winners)
        }
        else if (parseMessage.type === "streak") {
            setStreak(parseMessage)
        }
        else if (parseMessage.type === "chat") {
            console.log("get inside the chat", parseMessage)
        }
        else if (parseMessage.type === "result") {
            console.log("get inside the result of the question", parseMessage)
        }
      }
    return (
        !winners ? 
            <div>
                <div style={{display:'flex', flexDirection: 'row'}}>
                    <div style={{width: '70%'}}>
                        <QuestionFrame
                            questionInfo={questionInfo}
                            questionOptions={questionOptions}
                            timer={infoTimer}
                        />
                    </div>
                    <div style={{width: '30%'}}>
                        <ScoreBoard
                        scores={infoScore}
                        />
                    </div>

                </div>
                <div style={{width: '600px', height: '100px', margin: 'auto'}}>
                    <Streak
                     streak={streak}
                    />
                </div>
            </div>
        :
            <div>
                <Winners
                    scores={winnersScore}
                />
            </div>
    )
}

export default Game