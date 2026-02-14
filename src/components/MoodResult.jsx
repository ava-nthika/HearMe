import React from 'react';

const MoodResult = ({ result }) => {
    if (!result) return null;

    return (
        <div className="glass-card fade-in" style={{ borderLeft: `8px solid ${result.color}` }}>
            {result.story && (
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'rgba(0,0,0,0.05)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: '#4c566a',
                    marginBottom: '1rem'
                }}>
                    <span>{result.story.emoji}</span>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>{result.story.title} Context</span>
                </div>
            )}

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '0.5rem' }}>{result.emoji}</span>
                <h2 style={{ textTransform: 'capitalize', color: result.color, fontSize: '1.8rem' }}>{result.mood}</h2>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2e3440', fontWeight: '500' }}>
                    {result.acknowledgment}
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#4c566a', borderBottom: '1px solid #e0e0e0', paddingBottom: '0.5rem' }}>
                    Practical Steps
                </h3>
                {result.tips.map((tip, index) => (
                    <div key={index} style={{
                        background: 'rgba(129, 199, 132, 0.1)',
                        padding: '1.2rem',
                        borderRadius: '15px',
                        border: '1px solid rgba(129, 199, 132, 0.2)'
                    }}>
                        <strong style={{ display: 'block', fontSize: '1rem', color: '#2e3440', marginBottom: '0.4rem' }}>
                            ✨ {tip.action}
                        </strong>
                        <p style={{ fontSize: '0.9rem', color: '#4c566a', lineHeight: '1.5' }}>
                            {tip.why}
                        </p>
                    </div>
                ))}
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#4c566a', borderBottom: '1px solid #e0e0e0', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                    Balanced Harmonies
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {result.songs.map((song, index) => (
                        <li key={index} style={{
                            background: 'white',
                            padding: '0.6rem 1rem',
                            borderRadius: '25px',
                            fontSize: '0.85rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                            border: '1px solid #f0f0f0',
                            color: '#2e3440'
                        }}>
                            🎵 {song}
                        </li>
                    ))}
                </ul>
            </div>

            <p style={{ textAlign: 'center', fontSize: '1rem', fontStyle: 'italic', color: '#66bb6a', fontWeight: '500', marginTop: '1rem' }}>
                {result.closing}
            </p>
        </div>
    );
};

export default MoodResult;
