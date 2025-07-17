import { validateBugData } from '../src/helpers/validation';

describe('Validation Helper Functions', () => {
    test('should validate correct bug data', () => {
        const bugData = {
            title: 'Sample Bug',
            description: 'This is a sample bug description.',
            status: 'open'
        };
        const result = validateBugData(bugData);
        expect(result).toBe(true);
    });

    test('should invalidate bug data with missing title', () => {
        const bugData = {
            description: 'This is a sample bug description.',
            status: 'open'
        };
        const result = validateBugData(bugData);
        expect(result).toBe(false);
    });

    test('should invalidate bug data with invalid status', () => {
        const bugData = {
            title: 'Sample Bug',
            description: 'This is a sample bug description.',
            status: 'invalid-status'
        };
        const result = validateBugData(bugData);
        expect(result).toBe(false);
    });
});