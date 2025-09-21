import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo Component', () => {
  it('renders default logo correctly', () => {
    render(<Logo />);
    const logo = screen.getByAltText('Bookmark Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo-bookmark.svg');
    expect(logo).toHaveClass('h-8');
  });

  it('renders white logo when white prop is true', () => {
    render(<Logo white={true} />);
    const logo = screen.getByAltText('Bookmark Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo-bookmark-white.svg');
  });

  it('renders logo with correct accessibility label', () => {
    render(<Logo />);
    const link = screen.getByLabelText('Bookmark Home');
    expect(link).toBeInTheDocument();
    expect(link.tagName.toLowerCase()).toBe('a');
  });
});