import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './App';


// @ts-ignore
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    email: "Nathan@yesenia.net",
    id: 3,
    name: "Clementine Bauch",
    phone: "1-463-123-4447",
    username: "Samantha",
    website: "ramiro.info",
    address : {
      city: "McKenziehaven",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      },
      street: "Douglas Extension",
      suite: "Suite 847",
      zipcode: "59590-4157"
    },
    company : {
      bs: "e-enable strategic applications",
      catchPhrase: "Face to face bifurcated interface",
      name: "Romaguera-Jacobson"
    }
  })
}))

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// eslint-disable-next-line jest/valid-describe
test('App fetch on mount', async() => {
  it('loads users data', async() => {
    // @ts-ignore
    await act(async () => render(<App />));
    expect(screen.getByText("Nathan@yesenia.net")).toBeInTheDocument()
  })
})
