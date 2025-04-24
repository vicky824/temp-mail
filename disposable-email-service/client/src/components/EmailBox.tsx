import React, { useState } from 'react';

const EmailBox: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const generateEmail = () => {
        // Logic to generate a new email address
        const newEmail = `temp-${Math.random().toString(36).substring(2, 15)}@example.com`;
        setEmail(newEmail);
        navigator.clipboard.writeText(newEmail);
        alert('Email address copied to clipboard!');
    };

    return (
        <div className="email-box">
            <button onClick={generateEmail} className="generate-button">
                Generate New Address
            </button>
            {email && <p className="email-display">{email}</p>}
        </div>
    );
};

export default EmailBox;