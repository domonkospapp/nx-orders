import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const mockFetch = (data: unknown) => {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => data,
    });
  });
};

describe('App', () => {
  beforeEach(() => {
    window.fetch = mockFetch([]);
  });
  it('should render successfully', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const baseElement = screen.findByTestId('app-container');

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const title = await screen.findByText(/Orders/);

    expect(title).toBeTruthy();
  });
});
