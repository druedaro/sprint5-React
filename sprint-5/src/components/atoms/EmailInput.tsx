interface EmailInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
}

const EmailInput = ({ value, onChange, placeholder, error }: EmailInputProps) => {
    return (
        <div className = "flex-1 relative">
            <input
                type="email"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full px-4 py-3 border rounded-md ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
            />
        {error && (<p className="absolute top-full left-0 mt-1 text-sm text-red-600">{error}</p>)}
    </div>
    );
};

export default EmailInput;