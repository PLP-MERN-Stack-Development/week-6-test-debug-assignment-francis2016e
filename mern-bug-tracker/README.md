# MERN Bug Tracker

This project is a bug tracking application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to report, view, update, and delete bugs.

## Project Structure

```
mern-bug-tracker
├── backend          # Backend server
│   ├── src         # Source files for the backend
│   ├── tests       # Test files for the backend
│   ├── package.json # Backend dependencies and scripts
│   └── README.md   # Backend documentation
├── frontend         # Frontend application
│   ├── src         # Source files for the frontend
│   ├── tests       # Test files for the frontend
│   ├── package.json # Frontend dependencies and scripts
│   └── README.md   # Frontend documentation
└── README.md       # Overall project documentation
```

## Installation

### Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the backend server:
   ```
   npm start
   ```

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm start
   ```

## Running Tests

### Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Run tests:
   ```
   npm test
   ```

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Run tests:
   ```
   npm test
   ```

## Debugging Techniques

- Use console logs to track values and application flow.
- Utilize Chrome DevTools to inspect network requests and component states.
- Use the Node.js inspector for debugging server-side code.
- Implement error boundaries in React components to catch and handle errors gracefully.

## Testing Approach

- **Backend**: Unit tests for helper functions and integration tests for API routes using Jest and Supertest.
- **Frontend**: Unit tests for components and integration tests to verify API calls and UI updates using React Testing Library.

## Coverage

Ensure that all critical functionalities are covered by tests, including bug reporting, viewing, updating, and deleting.

## License

This project is licensed under the MIT License.