import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const textChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState();
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className='mb3'>
                <textarea className="form-control" id="text" rows="10" onChange={textChange} value={ text }></textarea>
            </div>
            <button className='btn btn-primary my-2' onClick={handleUpperCase}>Covert to Uppercase</button>
            <button className='btn btn-primary mx-3' onClick={handleLowercase}>Covert to Lowercase</button>
        </div>
    )
}
