import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MobileMenu from '../MobileMenu';

describe('MobileMenu Component', () => {
  const mockItems = [
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const mockProps = {
    items: mockItems,
    isOpen: false,
    onToggle: jest.fn(),
    onClose: jest.fn()
  };

  describe('Menu Toggle Button', () => {
    it('renders toggle button with hamburger icon when closed', () => {
      render(<MobileMenu {...mockProps} />);
      const toggleButton = screen.getByLabelText('Toggle menu');
      expect(toggleButton).toBeInTheDocument();
    });

    it('calls onToggle when toggle button is clicked', async () => {
      const user = userEvent.setup();
      render(<MobileMenu {...mockProps} />);
      
      const toggleButton = screen.getByLabelText('Toggle menu');
      await user.click(toggleButton);
      
      expect(mockProps.onToggle).toHaveBeenCalledTimes(1);
    });
  });

  describe('Menu Content', () => {
    it('does not show menu content when closed', () => {
      render(<MobileMenu {...mockProps} />);
      const nav = screen.queryByRole('navigation');
      expect(nav).not.toBeInTheDocument();
    });

    it('shows menu content and navigation items when open', () => {
      render(<MobileMenu {...mockProps} isOpen={true} />);
      
      // Verifica que se muestren todos los enlaces de navegación
      mockItems.forEach(item => {
        expect(screen.getByText(item.label)).toBeInTheDocument();
      });

      // Verifica que se muestre el botón de Login
      expect(screen.getByText('Login')).toBeInTheDocument();
    });

    it('calls onClose when clicking navigation items', async () => {
      const user = userEvent.setup();
      render(<MobileMenu {...mockProps} isOpen={true} />);
      
      const firstLink = screen.getByText(mockItems[0].label);
      await user.click(firstLink);
      
      expect(mockProps.onClose).toHaveBeenCalled();
    });

    it('shows social media links when open', () => {
      render(<MobileMenu {...mockProps} isOpen={true} />);
      
      expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has accessible close button when menu is open', () => {
      render(<MobileMenu {...mockProps} isOpen={true} />);
      const closeButton = screen.getByLabelText('Close menu');
      expect(closeButton).toBeInTheDocument();
    });

    it('closes menu when close button is clicked', async () => {
      const user = userEvent.setup();
      render(<MobileMenu {...mockProps} isOpen={true} />);
      
      const closeButton = screen.getByLabelText('Close menu');
      await user.click(closeButton);
      
      expect(mockProps.onClose).toHaveBeenCalled();
    });
  });
});