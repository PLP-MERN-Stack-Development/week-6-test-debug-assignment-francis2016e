# Backend Bug Tracker Documentation

## Project Setup

1. **Clone the repository**:
   ```
   git clone https://github.com/yourusername/mern-bug-tracker.git
   cd mern-bug-tracker/backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the `backend` directory and add your environment variables (e.g., database connection string).

## Running the Application

To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000` by default.

## Running Tests

To run the tests, use:
```
npm test
```
This will execute all unit and integration tests defined in the `tests` directory.

## Debugging Techniques

- Use `console.log` statements to track variable values and application flow.
- Utilize Chrome DevTools for inspecting network requests and responses.
- For server-side debugging, use the Node.js inspector:
  ```
  node --inspect src/app.js
  ```
- Implement error boundaries in React components to catch and handle errors gracefully.

## Testing Approach

- **Unit Tests**: Focus on testing individual helper functions in `helpers/validation.js` and ensuring they behave as expected.
- **Integration Tests**: Test the API routes in `routes/bugRoutes.js` to ensure that create, update, delete, and retrieve functionalities work correctly.
- **Mocking**: Use libraries like `jest-mock` to mock database calls during tests, ensuring that tests run independently of the actual database.

## Error Handling

- Implement error handling in the backend using Express middleware located in `src/middleware/errorHandler.js`.
- Add client-side error boundaries in React components to capture and handle crashes gracefully.

## Documentation

This README provides an overview of the backend setup, running instructions, testing procedures, debugging techniques, and error handling implementations. For frontend documentation, please refer to the `frontend/README.md` file.