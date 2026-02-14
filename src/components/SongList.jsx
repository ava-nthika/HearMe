import React from 'react';

const SongList = ({ songs }) => {
    return (
        <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.8rem', opacity: 0.8 }}>Song Suggestions</h3>
            <ul style={{ listStyle: 'none' }}>
                {songs.map((song, index) => (
                    <li key={index} style={{
                        background: 'rgba(74, 144, 226, 0.1)',
                        padding: '0.5rem 0.8rem',
                        borderRadius: '8px',
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        🎵 {song}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
