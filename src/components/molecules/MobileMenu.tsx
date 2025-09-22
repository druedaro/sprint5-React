import type {NavItem} from '../../types';
import Icon from '../atoms/Icon';

interface MobileMenuProps {
    items: NavItem[];
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
}

const MobileMenu = ({ items, isOpen, onToggle, onClose }: MobileMenuProps) => {
    return (
        <div>
            <button onClick={onToggle} className="md:hidden p-2" aria-label="Toggle menu">
                <Icon name={isOpen ? 'close' : 'hamburguer'} />
            </button>
            
            {isOpen && (
                <div className="fixed inset-0 z-50 md:hidden bg-[#242A45]/95 text-white overflow-y-auto overflow-x-hidden overscroll-contain w-full">
                    <div className="min-h-screen flex flex-col w-full max-w-full">
                        <div className="flex items-center justify-between px-6 py-6 w-full max-w-full">
                            <img src="/images/logo-bookmark-white.svg" alt="Bookmark" className="h-6 max-w-full select-none" />
                            <button onClick={onClose} aria-label="Close menu" className="p-2">
                                <Icon name="close" />
                            </button>
                        </div>

                        <div className="mx-6 h-px bg-white/20 w-auto" />

                        <nav className="px-6 w-full max-w-full">
                            <ul className="mt-6 w-full max-w-full">
                                {items.map((item, num) => (
                                    <li key={item.id}>
                                        <a
                                            href={item.href}
                                            className="block py-6 text-center text-lg tracking-[0.2em] uppercase hover:text-white/80"
                                            onClick={onClose}
                                        >
                                            {item.label}
                                        </a>
                                        {num < items.length - 1 && <div className="h-px bg-white/20" />}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={onClose}
                                className="mt-8 w-full border border-white rounded-lg py-4 text-center tracking-[0.2em] uppercase hover:bg-white/10"
                            >
                                Login
                            </button>
                        </nav>

                        <div className="mt-auto flex items-center justify-center space-x-10 py-10 w-full">
                            <a href="#" aria-label="Facebook">
                                <Icon name="facebook" />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <Icon name="twitter" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;