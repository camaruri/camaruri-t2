import React, {useState} from "react";





function ButtonQuestion (props) {
    const [choice, setChoice] = useState('')
    const [color, setColor] = useState('#0675F6')
    const [cursorChoice, setCursorChoice] = useState('pointer')
    function handleChoice(option, event) {
        setChoice(option)
        setColor('#9EC9FA')
        setCursorChoice('')
    }

    return (
        <div>
            <h1>{props.question}</h1>
            <div>
            {
                Object.keys(props.options).map((key, item) => (
                    <p key={item}>
                        <button
                            style={{backgroundColor: choice ===  props.options[key]? "#0675F6": color, padding: "10px", borderRadius: '5px', cursor: cursorChoice}}
                            
                            disabled={choice !== ''}
                            onClick={(e) => handleChoice(props.options[key], e)}>
                                <span
                                    style={{color: 'white', fontWeight: 'bold'}}
                                >
                                    {props.options[key]}
                                </span>
                        </button>
                    </p>
                ))
            }
            </div>
        </div>
    )
}

export default ButtonQuestion