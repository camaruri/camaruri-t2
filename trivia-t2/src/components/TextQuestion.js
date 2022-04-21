import React, { useState } from "react";






function TextQuestion (props) {
    const [enter, setEnter] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setEnter(true)
        props.sendAnswer()
    }

    return (
        <div>
            <h1>{props.question} TEXT</h1>
            <form onSubmit={handleSubmit}>
                <label>Answer:</label>
                <br />
                <input 
                name='choreDesc' 
                type='text'
                value={props.answer}
                onChange={e => props.setAnswer(e.target.value)}
                />
                <input 
                    type='submit' 
                    value='Enter' 
                    disabled={props.answer !== ''}
                    style={{cursor: 'pointer'}}
                />
            </form>
            
        </div>

    )
}

export default TextQuestion