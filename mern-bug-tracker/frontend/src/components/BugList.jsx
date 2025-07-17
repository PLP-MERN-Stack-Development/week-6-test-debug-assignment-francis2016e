import React, { useEffect, useState } from 'react';
import BugItem from './BugItem';
import { fetchBugs } from '../api/bugApi';

const BugList = () => {
    const [bugs, setBugs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBugs = async () => {
            try {
                const data = await fetchBugs();
                setBugs(data);
            } catch (err) {
                setError('Failed to fetch bugs');
            } finally {
                setLoading(false);
            }
        };

        getBugs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Reported Bugs</h2>
            {bugs.length === 0 ? (
                <p>No bugs reported yet.</p>
            ) : (
                <ul>
                    {bugs.map(bug => (
                        <BugItem key={bug.id} bug={bug} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BugList;