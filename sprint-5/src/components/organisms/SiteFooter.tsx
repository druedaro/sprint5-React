const SiteFooter = () => {
  return (
    <footer className="bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <img src="/images/logo-bookmark-white.svg" alt="Bookmark" className="h-8" />
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
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <img src="/images/icon-facebook.svg" alt="Facebook" className="h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <img src="/images/icon-twitter.svg" alt="Twitter" className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
