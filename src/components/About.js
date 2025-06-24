import React from 'react';

function About({ textColor = '#000', backgroundColor = '#fff' }) {
    return (
        <>
            <div className='container'>
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

                <p style={{ color: textColor, fontSize: '18px' }}>
                    This app is styled using Bootstrap and built with functional components and hooks in React.
                </p>
                <button className="btn btn-primary my-3">Learn More</button>
            </div>

            <div className="container my-4">
                <h3 style={{ color: textColor }}>Why Use This App?</h3>
                <p style={{ color: textColor, fontSize: '16px' }}>
                    Whether you're editing a note, preparing content, or simply cleaning text, this app provides quick tools to get the job done. It's fast, responsive, and supports dark mode for better readability.
                </p>
            </div>
        </>
    );
}

export default About;