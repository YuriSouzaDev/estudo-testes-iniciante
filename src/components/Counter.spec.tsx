import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('<Counter />', () => {
  it('should init with count 0', () => {
    render(<Counter initialCount={0} />);
    const value = screen.getByRole('heading', { name: /count: 0/i });
    expect(value).toBeInTheDocument();
  });

  it('should increment count in 1', () => {
    render(<Counter initialCount={0} />);

    const buttonIncrement = screen.getByRole('button', { name: /increment/i });
    expect(buttonIncrement).toBeEnabled();
    fireEvent.click(buttonIncrement);
    expect(
      screen.getByRole('heading', { name: /count: 1/i }).textContent,
    ).toEqual('Count: 1');
  });

  it('should decrement count in 1', () => {
    render(<Counter initialCount={0} />);

    const buttonIncrement = screen.getByRole('button', { name: /decrement/i });
    expect(buttonIncrement).toBeEnabled();
    fireEvent.click(buttonIncrement);
    expect(
      screen.getByRole('heading', { name: /count: -1/i }).textContent,
    ).toEqual('Count: -1');
  });

  it('should reset count to 0', () => {
    render(<Counter initialCount={0} />);

    const buttonIncrement = screen.getByRole('button', { name: /reset/i });
    expect(buttonIncrement).toBeEnabled();
    fireEvent.click(buttonIncrement);
    expect(
      screen.getByRole('heading', { name: /count: 0/i }).textContent,
    ).toEqual('Count: 0');
  });

  it('should switch the signals', () => {
    render(<Counter initialCount={1} />);

    const buttonIncrement = screen.getByRole('button', {
      name: /switch signals/i,
    });
    expect(buttonIncrement).toBeEnabled();
    fireEvent.click(buttonIncrement);
    expect(
      screen.getByRole('heading', { name: /count: -1/i }).textContent,
    ).toEqual('Count: -1');
  });
});
