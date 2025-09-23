import {useState} from 'react';
import Button from "../atoms/Button";

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const submit = () => {
        if (!email.trim()) return setError('Email is required');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return setError('Please enter a valid email address');
        
        setError('');
        alert('Newsletter subscription successful!');
    };

    return (
        <section id = 'contact' className="py-16 md:py-24 px-4 bg-indigo-almost-purple">
            <div className="container mx-auto text-center max-w-xl">
                <p className="text-blue-100 mb-4 text-sm md:text-lg tracking-widest uppercase">35,000+ already joined</p>
                <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white leading-tight">
                Stay up-to-date with what we're doing
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 max-w-xl mx-auto sm:items-stretch">
                <div className="flex-1 relative">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className={`w-full px-4 py-3 border rounded-md ${
                            error ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {error && (<p className="absolute top-full left-0 mt-1 text-sm text-red-600">{error}</p>)}
                </div>
                <Button variant="tertiary" onClick={submit}>
                    Contact Us
                </Button>
                </div>
            </div>
            </section>
  );
};

export default Newsletter;
