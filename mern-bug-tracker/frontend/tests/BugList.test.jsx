import React from 'react';
import { render, screen } from '@testing-library/react';
import BugList from '../src/components/BugList';

describe('BugList Component', () => {
    const bugs = [
        { id: 1, title: 'Bug 1', status: 'open' },
        { id: 2, title: 'Bug 2', status: 'in-progress' },
        { id: 3, title: 'Bug 3', status: 'resolved' },
    ];

    test('renders BugList component with bugs', () => {
        render(<BugList bugs={bugs} />);
        const bugItems = screen.getAllByRole('listitem');
        expect(bugItems).toHaveLength(bugs.length);
    });

    test('displays message when no bugs are present', () => {
        render(<BugList bugs={[]} />);
        const message = screen.getByText(/no bugs reported/i);
        expect(message).toBeInTheDocument();
    });

    test('renders bug titles correctly', () => {
        render(<BugList bugs={bugs} />);
        bugs.forEach(bug => {
            const bugTitle = screen.getByText(bug.title);
            expect(bugTitle).toBeInTheDocument();
        });
    });
});