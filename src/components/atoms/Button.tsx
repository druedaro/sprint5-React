import type { ButtonProps } from "../../config/types";

const Button = ({ variant, children, onClick, className = ''}: ButtonProps) => {
    let buttonStyle = '';

    if (variant === 'primary') {
        buttonStyle = 'bg-indigo-almost-purple text-white hover:bg-white hover:text-indigo-almost-purple transition-all shadow-md border hover:border-indigo-almost-purple';
    } else if (variant === 'secondary') {
        buttonStyle = 'bg-gray-100 text-gray-700 rounded-md font-normal border border-gray-300 hover:bg-white shadow-md transition-all';
    } else if (variant === 'tertiary') {
        buttonStyle = 'bg-red-500 border-red-500 text-white px-7 py-3 rounded-md font-bold border-primary-red hover:bg-white hover:text-red-500 border hover:border-red-500 transition-all shadow-md text-sm md:text-base';
    }

    return (
        <button
            onClick = {onClick}
            className={`px-6 py-3 rounded-md font-medium transition-colors ${buttonStyle} ${className}`}
    >
      {children}
    </button>
    );
};

export default Button;