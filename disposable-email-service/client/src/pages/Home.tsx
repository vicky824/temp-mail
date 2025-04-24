import React from 'react';
import EmailBox from '../components/EmailBox';
import Header from '../components/Header';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Header />
            <h1 className="text-2xl font-bold mt-4">Welcome to Disposable Email Service</h1>
            <EmailBox />
        </div>
    );
};

export default Home;