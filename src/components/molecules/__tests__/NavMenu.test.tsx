import { render, screen } from '@testing-library/react';
import NavMenu from '../NavMenu';

describe('NavMenu Component', () => {
  const mockItems = [
    { id: '1', label: 'Features', href: '#features' },
    { id: '2', label: 'Pricing', href: '#pricing' },
    { id: '3', label: 'Contact', href: '#contact' }
  ];

  it('renders all navigation items', () => {
    render(<NavMenu items={mockItems} />);
    
    mockItems.forEach(item => {
      const link = screen.getByText(item.label);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', item.href);
      expect(link).toHaveClass('text-gray-700', 'hover:text-red-600', 'font-medium', 'uppercase', 'text-base');
    });
  });

  it('renders correct number of items', () => {
    render(<NavMenu items={mockItems} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockItems.length);
  });

  it('renders with correct navigation structure', () => {
    render(<NavMenu items={mockItems} />);
    const nav = screen.getByRole('navigation');
    const list = nav.querySelector('ul');
    expect(list).toHaveClass('flex', 'space-x-8');
  });
});