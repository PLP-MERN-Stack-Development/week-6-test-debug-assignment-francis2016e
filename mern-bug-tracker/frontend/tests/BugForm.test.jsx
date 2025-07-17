import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../src/components/BugForm';

describe('BugForm Component', () => {
    test('renders BugForm correctly', () => {
        render(<BugForm />);
        expect(screen.getByLabelText(/bug title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/bug description/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    test('validates form inputs', () => {
        render(<BugForm />);
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));
        expect(screen.getByText(/bug title is required/i)).toBeInTheDocument();
        expect(screen.getByText(/bug description is required/i)).toBeInTheDocument();
    });

    test('submits the form with valid inputs', () => {
        const mockSubmit = jest.fn();
        render(<BugForm onSubmit={mockSubmit} />);
        
        fireEvent.change(screen.getByLabelText(/bug title/i), { target: { value: 'Test Bug' } });
        fireEvent.change(screen.getByLabelText(/bug description/i), { target: { value: 'This is a test bug description.' } });
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(mockSubmit).toHaveBeenCalledWith({
            title: 'Test Bug',
            description: 'This is a test bug description.',
        });
    });
});