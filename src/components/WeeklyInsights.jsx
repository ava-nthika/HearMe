import React from 'react';

const WeeklyInsights = ({ history }) => {
    if (!history || history.length === 0) return null;

    // Filter history for the last 7 days
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const recentHistory = history.filter(item => item.timestamp > oneWeekAgo);

    if (recentHistory.length === 0) return null;

    // Calculate mood frequencies
    const frequencies = recentHistory.reduce((acc, item) => {
        acc[item.mood] = (acc[item.mood] || 0) + 1;
        return acc;
    }, {});

    const total = recentHistory.length;
    const sortedMoods = Object.entries(frequencies)
        .sort(([, a], [, b]) => b - a);

    const topMood = sortedMoods[0][0];
    const topMoodData = recentHistory.find(item => item.mood === topMood);

    return (
        <div className="glass-card fade-in" style={{ marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#4caf50' }}>Weekly Mood Insights</h3>

            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'rgba(232, 245, 233, 0.5)', borderRadius: '15px', textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', color: '#4c566a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Most Frequent Mood</p>
                <span style={{ fontSize: '2.5rem' }}>{topMoodData?.emoji}</span>
                <h4 style={{ textTransform: 'capitalize', fontSize: '1.2rem', color: '#2e3440' }}>{topMood}</h4>
            </div>

            <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#4c566a' }}>Mood Distribution</h4>
                {Object.entries(frequencies).map(([mood, count]) => {
                    const percentage = (count / total) * 100;
                    const moodInfo = recentHistory.find(item => item.mood === mood);
                    return (
                        <div key={mood} className="insight-item">
                            <div className="insight-label">
                                <span style={{ textTransform: 'capitalize' }}>{moodInfo?.emoji} {mood}</span>
                                <span>{Math.round(percentage)}%</span>
                            </div>
                            <div className="insights-bar">
                                <div className="insights-fill" style={{ width: `${percentage}%`, background: moodInfo?.color }}></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WeeklyInsights;
