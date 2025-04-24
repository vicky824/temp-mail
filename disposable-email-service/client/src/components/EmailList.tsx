import React, { useEffect, useState } from 'react';
import { fetchMessages } from '../services/api';

const EmailList: React.FC<{ mailboxId: string }> = ({ mailboxId }) => {
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const loadMessages = async () => {
            try {
                const response = await fetchMessages(mailboxId, page);
                setMessages(prevMessages => [...prevMessages, ...response.messages]);
                setHasMore(response.hasMore);
            } catch (err) {
                setError('Failed to load messages');
            } finally {
                setLoading(false);
            }
        };

        loadMessages();
    }, [mailboxId, page]);

    const loadMoreMessages = () => {
        if (hasMore && !loading) {
            setPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div>
            <h2>Email Messages</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {messages.map(message => (
                    <li key={message.id}>{message.subject}</li>
                ))}
            </ul>
            {hasMore && <button onClick={loadMoreMessages}>Load More</button>}
        </div>
    );
};

export default EmailList;