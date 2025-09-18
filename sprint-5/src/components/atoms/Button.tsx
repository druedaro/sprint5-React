import type { ButtonProps } from "../../types";

const Button = ({ variant, children, onClick, className = ''}: ButtonProps) => {
    let buttonStyle = '';

    if (variant === 'primary') {
        buttonStyle = 'bg-blue-500 text-white px-8 py-2 rounded-lg uppercase font-bold hover:bg-blue-600 transition-colors shadow-md text-sm md:text-base';
    } else if (variant === 'secondary') {
        buttonStyle = 'bg-red-500 text-white px-8 py-2 rounded-lg uppercase font-bold hover:bg-red-600 transition-colors shadow-md text-sm md:text-base';
    } else if (variant === 'tertiary') {
        buttonStyle = 'bg-red-500 text-white px-7 py-3 rounded-md font-bold border-red-500 hover:bg-white hover:text-red-500 border hover:border-red-500 transition-all shadow-md text-sm md:text-base';
    }

    return (
        <button
            onClick = {onClick}
            className = {`px-4 py-2 rounded-md font-medium transition-colors ${buttonStyle} ${className}`}
    >
      {children}
    </button>
    );
};

export default Button;