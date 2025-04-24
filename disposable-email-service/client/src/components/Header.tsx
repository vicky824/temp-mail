import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl">Disposable Email Service</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/inbox" className="hover:underline">Inbox</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;