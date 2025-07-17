import React, { useState } from 'react';
import { createBug } from '../api/bugApi';

const BugForm = ({ onBugCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!title || !description) {
            setError('Title and description are required.');
            return;
        }

        try {
            const newBug = { title, description };
            await createBug(newBug);
            onBugCreated(); // Callback to refresh the bug list
            setTitle('');
            setDescription('');
        } catch (err) {
            setError('Failed to create bug. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Report a New Bug</h2>
            {error && <p className="error">{error}</p>}
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit Bug</button>
        </form>
    );
};

export default BugForm;