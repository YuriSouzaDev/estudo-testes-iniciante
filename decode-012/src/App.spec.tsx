import { fireEvent, render, waitFor } from '@testing-library/react';
import App from './App';
import List from './components/List';

describe('<List />', () => {
  it.skip('should render list with names', async () => {
    const { rerender, queryByText } = render(
      <List key="initial" initialItems={['Yuri', 'João']} />,
    );

    expect(queryByText('Pedro')).not.toBeInTheDocument();
    expect(queryByText('Yuri')).toBeInTheDocument();
    expect(queryByText('João')).toBeInTheDocument();
    rerender(<List initialItems={['Arthur']} />);
    expect(queryByText('Arthur')).toBeInTheDocument();
  });

  it.skip('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(
      <List initialItems={[]} />,
    );

    const inputElement = getByPlaceholderText('Novo item');
    const addButton = getByText('Adicionar');

    fireEvent.input(inputElement, { target: { value: 'Novo' } });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(getByText('Novo')).toBeInTheDocument();
    });
  });

  it.skip('should be able to remove item from the list', async () => {
    const { getAllByText, queryByText } = render(
      <List initialItems={['Yuri']} />,
    );

    const removeButton = getAllByText('Remover');

    fireEvent.click(removeButton[0]);

    await waitFor(() => {
      expect(queryByText('Yuri')).not.toBeInTheDocument();
    });
  });
});

describe('<App />', () => {
  it.skip('should be render with hello message', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello message'));
  });

  it('should change message on button click', () => {
    const { getByText } = render(<App />);
    const button = getByText(/change message/i);

    getByText('Aprendendo sobre testes');

    fireEvent.click(button);

    getByText(/Aprendendo sobre React/i);
  });
});
