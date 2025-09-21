import { render, screen } from '@testing-library/react';
import Downloads from '../Downloads';

describe('Downloads Component', () => {
  it('renders the main downloads section with title', () => {
    render(<Downloads />);
    
    expect(screen.getByText('Download the extension')).toBeInTheDocument();
  });

  it('renders browser download cards', () => {
    render(<Downloads />);
    
    expect(screen.getByText('Add to Chrome')).toBeInTheDocument();

    expect(screen.getByText('Minimum version 62')).toBeInTheDocument();
  });

  it('renders browser logos correctly', () => {
    render(<Downloads />);
    
    expect(screen.getByAltText('Chrome')).toBeInTheDocument();
    expect(screen.getByAltText('Firefox')).toBeInTheDocument();
    expect(screen.getByAltText('Opera')).toBeInTheDocument();
  });

  it('renders download buttons for each browser', () => {
    render(<Downloads />);
    
    const buttons = screen.getAllByText(/Add & Install Extension/i);
    expect(buttons).toHaveLength(3); 
  });

});