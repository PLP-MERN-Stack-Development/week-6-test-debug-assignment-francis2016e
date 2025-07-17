# MERN Bug Tracker Frontend

## Installation

To set up the frontend environment, follow these steps:

1. Navigate to the `frontend` directory:
   ```
   cd mern-bug-tracker/frontend
   ```

2. Install the necessary dependencies:
   ```
   npm install
   ```

## Running the Application

To start the frontend application, run the following command:
```
npm start
```
This will launch the application in your default web browser.

## Running Tests

To run the tests for the frontend application, use the following command:
```
npm test
```
This will execute all the tests defined in the `tests` directory.

## Debugging Techniques

When debugging the frontend application, consider the following techniques:

- Use console logs to track values and application flow.
- Utilize Chrome DevTools to inspect network requests and component states.
- Implement error boundaries to capture and handle errors gracefully in React components.

## Testing Approach

The frontend application includes unit tests and integration tests to ensure functionality:

- **Unit Tests**: Each component has associated tests to verify rendering, user interactions, and form validations.
- **Integration Tests**: Tests are implemented to verify API calls and ensure the UI updates correctly based on the application state.

## Coverage

The testing framework used is React Testing Library, and Jest is configured to provide coverage reports. You can view the coverage by running:
```
npm test -- --coverage
```

## Conclusion

This README provides an overview of the setup, running, testing, and debugging processes for the frontend of the MERN Bug Tracker application. For further details, refer to the individual component and API documentation within the codebase.