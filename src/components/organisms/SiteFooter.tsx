import Logo from '../atoms/Logo';
import Icon from '../atoms/Icon';

const SiteFooter = () => {
  return (
    <footer className="bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <Logo white />
            <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center font-semibold text-base">
              <a href="#features" className="text-gray-300 hover:text-white uppercase tracking-wide transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white uppercase tracking-wide  transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white uppercase tracking-wide transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
              <Icon name="facebook" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
              <Icon name="twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
