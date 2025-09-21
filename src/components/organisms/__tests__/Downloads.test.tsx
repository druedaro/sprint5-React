import { render, screen } from '@testing-library/react';
import Downloads from '../Downloads';

describe('Downloads Component', () => {
  it('renders the main downloads section with title', () => {
    render(<Downloads />);
    
    // Verificar el título principal
    expect(screen.getByText('Download the extension')).toBeInTheDocument();
    expect(screen.getByText("We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.")).toBeInTheDocument();
  });

  it('renders all browser download cards', () => {
    render(<Downloads />);
    
    // Verificar que se muestran todas las tarjetas de navegadores
    expect(screen.getByText('Add to Chrome')).toBeInTheDocument();
    expect(screen.getByText('Add to Firefox')).toBeInTheDocument();
    expect(screen.getByText('Add to Opera')).toBeInTheDocument();

    // Verificar que se muestran las versiones mínimas
    expect(screen.getByText('Minimum version 62')).toBeInTheDocument();
    expect(screen.getByText('Minimum version 55')).toBeInTheDocument();
    expect(screen.getByText('Minimum version 46')).toBeInTheDocument();
  });

  it('renders browser logos correctly', () => {
    render(<Downloads />);
    
    // Verificar que se muestran los logos de los navegadores
    expect(screen.getByAltText('Chrome')).toBeInTheDocument();
    expect(screen.getByAltText('Firefox')).toBeInTheDocument();
    expect(screen.getByAltText('Opera')).toBeInTheDocument();
  });

  it('renders download buttons for each browser', () => {
    render(<Downloads />);
    
    const buttons = screen.getAllByText(/Add & Install Extension/i);
    expect(buttons).toHaveLength(3); // Debe haber 3 botones de descarga
  });

  it('shows decorative dots images', () => {
    render(<Downloads />);
    
    // Verificar que se muestran las imágenes decorativas de puntos
    const dotsImages = screen.getAllByAltText('');
    expect(dotsImages.length).toBeGreaterThan(0);
  });
});