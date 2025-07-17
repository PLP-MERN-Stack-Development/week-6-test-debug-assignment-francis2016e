import '@testing-library/jest-dom/extend-expect';  
import 'jest-fetch-mock';  

beforeEach(() => {  
  fetch.resetMocks();  
});  

// Additional global setup can be added here if needed.