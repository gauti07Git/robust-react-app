import React from 'react';

function About(props) {
    const textColor = props.mode === 'dark' ? 'white' : 'black';
    const backgroundColor = props.mode === 'dark' ? '#104060' : 'white';
    return (
        <>
            <div className='container'>
                <div className="card shadow-sm">
                    <div className="card-body" style={{ backgroundColor: backgroundColor, color: textColor }}>
                        <h2 style={{ color: textColor }}>About This App</h2>
                        <p style={{ color: textColor, fontSize: '18px' }}>
                            This is a simple React-based <strong>Text Manager App</strong> that helps users manipulate their text easily. It offers:
                        </p>
                        <ul style={{ color: textColor, fontSize: '16px' }}>
                            <li>Convert text to UPPERCASE and lowercase</li>
                            <li>Remove extra spaces</li>
                            <li>Copy text to clipboard</li>
                            <li>Clear entire text content</li>
                            <li>Get word/character counts</li>
                        </ul>
                        <button className="btn btn-primary my-3">Learn More</button>
                    </div>
                </div>
                
                <div className="card shadow-sm my-4">
                    <div className="card-body" style={{ backgroundColor: backgroundColor, color: textColor }}>
                        <h3 style={{ color: textColor }}>Why Use This App?</h3>
                        <p style={{ color: textColor, fontSize: '16px' }}>
                            Whether you're editing a note, preparing content, or simply cleaning text, this app provides quick tools to get the job done. It's fast, responsive, and supports dark mode for better readability.
                        </p>
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default About;