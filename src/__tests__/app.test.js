import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../app.js'

describe('test if results render to screen', () => {

  test('render api results to screen', async () => {
    render(<App />);
    const dataDisplayed = await waitFor(() => screen.getByTestId('name'));
    console.log(dataDisplayed)
    
  
  }); 
});