import { fireEvent, render, screen } from '@testing-library/react';
import { signIn } from 'next-auth/client';
import { mocked } from 'ts-jest/utils';
import { SubscribeButton } from '.';

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false];
    },
    // mocando função vazia usando jest.fn()
    signIn: jest.fn(),
  };
});
jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        push: jest.fn(),
      };
    },
  };
});

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    render(<SubscribeButton />);

    expect(screen.getByText('Subscribe now')).toBeInTheDocument();
  });

  it('redicts user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText('Subscribe now');

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });

  it('redirect to posts when user already has a subscription', () => {});
});
