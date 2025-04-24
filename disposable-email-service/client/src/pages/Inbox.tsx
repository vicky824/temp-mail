import React, { useEffect, useState } from 'react';
import { fetchMessages } from '../services/api';

const Inbox: React.FC = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMessages = async () => {
            const fetchedMessages = await fetchMessages();
            setMessages(fetchedMessages);
            setLoading(false);
        };

        loadMessages();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Inbox</h1>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>
                        <h2>{message.subject}</h2>
                        <p>{message.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inbox;