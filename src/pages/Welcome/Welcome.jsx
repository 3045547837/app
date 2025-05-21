import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
const Welcome = ({ onNext }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            onNext();
            navigate('/guide');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate, onNext]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src="/logo.png" alt="Logo" height="200" />
            <h1>欢迎来到 infist 线上面试环节，期待你的加入！</h1>
        </div>
    );
};

export default Welcome;