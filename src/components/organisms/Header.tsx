import { useState } from "react";
import type { NavItem } from "../../config/types";  
import Logo from "../atoms/Logo";
import NavMenu from "../molecules/NavMenu";
import MobileMenu from "../molecules/MobileMenu";
import Button from "../atoms/Button";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: '1', label: 'Features', href: '#features' },
    { id: '2', label: 'Pricing', href: '#pricing' },
    { id: '3', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />
          
          <div className="hidden md:flex items-center flex-1 justify-end space-x-6">
            <NavMenu items={navItems} />
            <Button variant="tertiary" className="py-2">
              LOGIN
            </Button>
        </div>
          
          <MobileMenu
            items={navItems}
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
