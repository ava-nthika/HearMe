import React from 'react';

const MoodHistory = ({ history }) => {
    if (history.length === 0) return null;

    return (
        <div className="glass-card fade-in" style={{ marginTop: '2rem', padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>
                Mood History
            </h3>
            <div style={{ display: 'flex', gap: '0.8rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                {history.map((item, index) => (
                    <div key={index} style={{
                        background: 'white',
                        padding: '0.8rem',
                        borderRadius: '12px',
                        minWidth: '100px',
                        textAlign: 'center',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        border: `1px solid ${item.color}44`
                    }}>
                        <span style={{ fontSize: '1.5rem', display: 'block' }}>{item.emoji}</span>
                        <span style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'capitalize' }}>{item.mood}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoodHistory;
