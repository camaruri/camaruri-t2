import React, { useState } from "react";





function ChatQuestion (props) {
    const [answer, setAnswer] = useState('')
    const [enter, setEnter] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setEnter(true)
        sendAnswer()
    }


    function sendAnswer () {
        const dataAnswer= JSON.stringify({
            type: "answer",
            question_id: props.question_id,
            value: answer
        })
        console.log("the dataAnswer is ", dataAnswer)
        // clientConnection.send(dataJoin);
    }


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