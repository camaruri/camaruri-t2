import React, { useState, useEffect } from "react";

import clientConnection from "../client";




function ChatQuestion (props) {
    const [answer, setAnswer] = useState(undefined)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        sendAnswer(answer)
    }

    function sendAnswer (answer) {
        const dataAnswer= JSON.stringify({
            type: "answer",
            question_id: props.question_id,
            value: answer
        })
        clientConnection.send(dataAnswer);
        setAnswer(undefined)
    }

    useEffect(() => {
        setAnswer(undefined)
      }, [props.question_id]);


    return (
        <div>
            <h1>{props.question} CHAT</h1>
            <form onSubmit={handleSubmit}>
                <label>Answer:</label>
                <br />
                <input 
                name='choreDesc' 
                type='text'
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                />
                <input 
                    type='submit' 
                    value='Enter' 
                    style={{cursor: 'pointer'}}
                />
            </form>
        </div>
        
    )
}

export default ChatQuestion