import { render, screen } from '@testing-library/react';
import { Header } from '.';

// mocando useSession dentro do signButton
// fazendo o useSession retornar um array com null e false
jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false];
    },
  };
});

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

describe('Header Component', () => {
  it('renders correctly', () => {
    render(<Header />);
    screen.logTestingPlaygroundURL();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Home')).toHaveClass('active');

    expect(screen.getByText('Posts')).toBeInTheDocument();
  });
});
