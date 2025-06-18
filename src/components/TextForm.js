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
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }
    const handleClearText = () => {
        setText('');
    }

    const handleRemoveSpace = () => {
        let newText = text.replace(/\s+/g, '');
        setText(newText);
    }
    const textChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState();
    const textColor = props.mode === 'dark' ? 'white' : 'black';
    const backgroundColor = props.mode === 'dark' ? '#104060' : 'white';
    const safeText = (text || "").trim();
    const wordCount = safeText === "" ? 0 : safeText.split(/\s+/).length;
    const charCount = safeText.length;
    return (
        <>
            <div className='container'>
                <h2 style={{ color: textColor }}>{props.heading}</h2>
                <div className='mb3'>
                    <textarea className="form-control" id="text" rows="10" onChange={textChange} value={ text } style={{ backgroundColor: backgroundColor, color: textColor }}/>
                </div>
                <button className="btn btn-primary my-3" onClick={handleUpperCase}>Covert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowercase}>Covert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveSpace}>Remove Space</button>
            </div>
            <div className='container my-3'>
                <h2 style={{ color: textColor }}>Text Summary</h2>
                <p style={{ color: textColor, fontSize: '20px' }}> <strong>{wordCount}</strong> words and <strong>{charCount}</strong> characters</p>
                <p style={{ color: textColor, fontSize: '20px' }}> <strong>{wordCount * 0.008}</strong> Minutes to read</p>

                <h3 style={{ color: textColor }}>Preview</h3>
                <p style={{ color: textColor, fontSize: '16px' }}> { text } </p>
            </div>
        </>
    )
}
