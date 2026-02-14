import React from 'react';

const SuggestionCard = ({ suggestion }) => {
    return (
        <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.8rem', opacity: 0.8 }}>Recommendation</h3>
            <div style={{
                background: 'rgba(46, 213, 115, 0.1)',
                padding: '1rem',
                borderRadius: '12px',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                border: '1px solid rgba(46, 213, 115, 0.2)'
            }}>
                ✨ {suggestion}
            </div>
        </div>
    );
};

export default SuggestionCard;
