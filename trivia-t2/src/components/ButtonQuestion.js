import React, { useState, useEffect } from "react";

import clientConnection from "../client";





function ButtonQuestion (props) {
    const [choice, setChoice] = useState()
    const [valid, setValid] = useState(props.isValid)

    const handleChange = (e) => {
        setChoice(e.target.value)
    }

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        setValid(true)
        setChoice('')
        console.log("get inside the use effect because the question id changhes")
      }, [props.question_id]);

    const formSubmit = (e) => {
        e.preventDefault();
        const dataAnswer= JSON.stringify({
            type: "answer",
            question_id: props.question_id,
            value: choice
        })
        console.log("the dataAnswer is ", dataAnswer)
        clientConnection.send(dataAnswer);
        setValid(false)
      }

    return (
        <div>
            <h1>{props.question}</h1>
            <div>
            <form onSubmit={formSubmit}>
                {
                Object.keys(props.options).map((key, item) => (
                    <div className="radio">
                        <label>
                        <input
                            type="radio"
                            value={key}
                            checked={choice === key}
                            onChange={handleChange}
                        />
                        {props.options[key]}
                        </label>
                    </div>
                ))
                }
                <button className="btn btn-default" type="submit" disabled={!valid}>
                    Submit
                </button>
            </form>
            {
                // Object.keys(props.options).map((key, item) => (
                //     <p key={item}>
                //         <button
                //             style={{backgroundColor: choice !==  props.options[key]? "#0675F6": "#ADE1F4",
                //             padding: "10px",
                //             borderRadius: '5px',
                //             cursor: choice !== '' ? '' : 'pointer' }}
                            
                //             disabled={choice !== ''}
                //             onClick={(e) => handleChoice(props.options[key], e)}>
                //                 <span
                //                     style={{color: 'white', fontWeight: 'bold'}}
                //                 >
                //                     {props.options[key]}
                //                 </span>
                //         </button>
                //     </p>
                // ))
            }
            </div>
        </div>
    )
}

export default ButtonQuestion