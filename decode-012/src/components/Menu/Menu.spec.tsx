import { fireEvent, render, screen } from '@testing-library/react';
import Menu from './Menu';

const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}));

const renderComponent = () => render(<Menu />);
const buttonMenuComponent = (text: string) => screen.getByText(text);

describe('Menu Component', () => {
  it('should call navigate when click on button to home correctly', () => {
    renderComponent();

    const buttonElement = buttonMenuComponent('Home');

    fireEvent.click(buttonElement);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('should call navigate when click on button to conta correctly', () => {
    renderComponent();

    const buttonElement = buttonMenuComponent('Conta');

    fireEvent.click(buttonElement);

    expect(mockNavigate).toHaveBeenCalledWith('/conta');
  });
});
