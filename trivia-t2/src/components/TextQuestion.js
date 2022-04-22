import React, { useState, useEffect } from "react";

import clientConnection from "../client";






function TextQuestion (props) {
    const [enter, setEnter] = useState(false)
    const [answer, setAnswer] = useState('')

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
        console.log("The data answer is ", dataAnswer)
        clientConnection.send(dataAnswer);
        setEnter(true)
    }

    useEffect(() => {
        setAnswer('')
        setEnter(false)
      }, [props.question_id]);

    return (
        <div>
            <h1>{props.question} TEXT</h1>
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
                    disabled={enter}
                    style={{cursor: 'pointer'}}
                />
            </form>
            
        </div>

    )
}

export default TextQuestion