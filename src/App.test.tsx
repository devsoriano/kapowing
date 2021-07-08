import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App>', () => {
  it('renders Core Frontend', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/title/i);
    expect(document.body.contains(headerElement));
  });
});
