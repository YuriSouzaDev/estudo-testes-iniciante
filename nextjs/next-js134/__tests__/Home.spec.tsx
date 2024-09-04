import Home from '@/app/page';
import { render } from '@testing-library/react';

describe('Home', () => {
  it('should render correctly', () => {
    render(<Home />);
  });
});
