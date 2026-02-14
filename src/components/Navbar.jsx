import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#2d3436', letterSpacing: '-1px' }}>
                Hear<span style={{ color: '#66bb6a' }}>Me</span>
            </h1>
            <p style={{ color: '#636e72', fontSize: '0.9rem' }}>Your AI-powered mood companion</p>
        </nav>
    );
};

export default Navbar;
