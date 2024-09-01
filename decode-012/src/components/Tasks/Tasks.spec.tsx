import { fireEvent, render } from '@testing-library/react';
import axios from 'axios';
import Tasks from './Tasks';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Tasks Component', () => {
  it('should fetch and show tasks on button click', async () => {
    const mockTasks = [
      { id: 1, title: 'delectus aut autem' },
      { id: 2, title: 'quis ut nam facilis et officia qui' },
    ];
    mockedAxios.get.mockResolvedValue({ data: mockTasks });

    const { getByText, findByText } = render(<Tasks />);

    const button = getByText('Get tasks from API');
    fireEvent.click(button);

    await findByText(/delectus aut autem/i);
  });
});
