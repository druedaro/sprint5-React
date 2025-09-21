import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Features from '../Features';

describe('Features Component', () => {
  const getFeatureTabs = () => screen.getAllByRole('button').filter(button => 
    !button.textContent?.includes('More Info')
  );

  it('renders the features section with title and description', () => {
    render(<Features />);
    
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Our aim is to make it quick and easy for you to access your favourite websites.')).toBeInTheDocument();
  });

  it('renders all feature tabs', () => {
    render(<Features />);
    
    const tabs = getFeatureTabs();
    expect(tabs[0]).toHaveTextContent('Bookmark in one click');
    expect(tabs[1]).toHaveTextContent('Intelligent search');
    expect(tabs[2]).toHaveTextContent('Share your bookmarks');
  });

  it('shows first feature content by default', () => {
    render(<Features />);
    
    expect(screen.getByText('Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')).toBeInTheDocument();
    expect(screen.getByAltText('Bookmark in one click')).toBeInTheDocument();
  });

  it('changes content when clicking different tabs', async () => {
    const user = userEvent.setup();
    render(<Features />);
    
    const tabs = getFeatureTabs();
    
    await user.click(tabs[1]);
    
    expect(screen.getByText('Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.')).toBeInTheDocument();
    expect(screen.getByAltText('Intelligent search')).toBeInTheDocument();

    await user.click(tabs[2]);
    
    expect(screen.getByText('Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.')).toBeInTheDocument();
    expect(screen.getByAltText('Share your bookmarks')).toBeInTheDocument();
  });

  it('renders More Info button for each feature', async () => {
    const user = userEvent.setup();
    render(<Features />);
    const tabs = getFeatureTabs();
    
    expect(screen.getByText('More Info')).toBeInTheDocument();
    
    await user.click(tabs[1]);
    expect(screen.getByText('More Info')).toBeInTheDocument();
    
    await user.click(tabs[2]);
    expect(screen.getByText('More Info')).toBeInTheDocument();
  });

  it('applies correct styles to active tab', async () => {
    const user = userEvent.setup();
    render(<Features />);
    
    const tabs = getFeatureTabs();
    const firstTab = tabs[0];
    const secondTab = tabs[1];

    expect(firstTab).toHaveClass('border-red-500', 'text-red-500');
    
    await user.click(secondTab);
    
    expect(secondTab).toHaveClass('border-red-500', 'text-red-500');
    expect(firstTab).not.toHaveClass('border-red-500', 'text-red-500');
  });
});