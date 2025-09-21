import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Newsletter from '../Newsletter';

describe('Newsletter Component', () => {
    it('renders correctly', () => {
        render(<Newsletter />);
        
        expect(screen.getByText('35,000+ already joined')).toBeInTheDocument();
        expect(screen.getByText("Stay up-to-date with what we're doing")).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter your email address')).toBeInTheDocument();
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    it('shows error when submitting empty email', async () => {
        render(<Newsletter />);
        const user = userEvent.setup();
        
        const submitButton = screen.getByText('Contact Us');
        await user.click(submitButton);

        expect(screen.getByText('Email is required')).toBeInTheDocument();
    });

    it('shows error when submitting invalid email format', async () => {
        render(<Newsletter />);
        const user = userEvent.setup();
        
        const emailInput = screen.getByPlaceholderText('Enter your email address');
        await user.type(emailInput, 'invalid-email');
        
        const submitButton = screen.getByText('Contact Us');
        await user.click(submitButton);

        expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    });

    it('shows success message when submitting valid email', async () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
        render(<Newsletter />);
        const user = userEvent.setup();
        
        const emailInput = screen.getByPlaceholderText('Enter your email address');
        await user.type(emailInput, 'test@example.com');
        
        const submitButton = screen.getByText('Contact Us');
        await user.click(submitButton);

        expect(alertMock).toHaveBeenCalledWith('Newsletter subscription successful!');
        alertMock.mockRestore();
    });

    it('clears error message when valid email is submitted', async () => {
        render(<Newsletter />);
        const user = userEvent.setup();
        
        // First trigger an error
        const submitButton = screen.getByText('Contact Us');
        await user.click(submitButton);
        expect(screen.getByText('Email is required')).toBeInTheDocument();
        
        // Then submit a valid email
        const emailInput = screen.getByPlaceholderText('Enter your email address');
        await user.type(emailInput, 'test@example.com');
        await user.click(submitButton);
        
        // Error message should be gone
        expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
    });
});