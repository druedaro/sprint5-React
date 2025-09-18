import Button from '../atoms/Button';

const Hero = () => {
    return (
        <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          A Simple Bookmark Manager
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary">
            Get it on Chrome
          </Button>
          <Button variant="secondary">
            Get it on Firefox
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
