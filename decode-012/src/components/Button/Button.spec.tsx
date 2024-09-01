import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('should render with .5 opacity when click', () => {
    const { getByRole } = render(
      <Button disabled={true} onClick={() => {}}>
        Click on me
      </Button>,
    );

    const button = getByRole('button', { name: /click on me/i });
    expect(button).toHaveStyle({ opacity: 0.5 });
  });

  it('should call onClick prop on click', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button disabled={true} onClick={onClick}>
        Click on me
      </Button>,
    );

    const button = getByText(/click on me/i);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledWith(expect.any(Number));
  });
});
