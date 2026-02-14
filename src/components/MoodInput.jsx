import React, { useState } from 'react';

const MoodInput = ({ onAnalyze, isLoading }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAnalyze(text);
            setText('');
        }
    };

    return (
        <div className="glass-card fade-in">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <textarea
                    placeholder="How are you feeling today?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{
                        width: '100%',
                        height: '100px',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid #ddd',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        resize: 'none',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#66bb6a'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
                <button
                    type="submit"
                    disabled={isLoading || !text.trim()}
                    style={{
                        background: '#66bb6a',
                        color: 'white',
                        padding: '0.8rem',
                        borderRadius: '12px',
                        border: 'none',
                        fontSize: '1rem',
                        fontWeight: '600',
                        opacity: isLoading || !text.trim() ? 0.7 : 1
                    }}
                >
                    {isLoading ? 'Analyzing your mood...' : 'Analyze Mood'}
                </button>
            </form>
        </div>
    );
};

export default MoodInput;
