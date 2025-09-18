import Button from "../atoms/Button";

// Hero component for the main landing section.
// It typically includes a headline, subheadline, and a call-to-action button.
// The layout is visually appealing and designed to capture user attention.
// It may also include background images or animations for enhanced engagement.

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-900 leading-tight">
              A Simple Bookmark Manager
            </h1>
            <p className="text-lg md:text-base text-gray-600 mb-8 leading-relaxed">
              A clean and simple interface to organize your favourite websites. Open a new
              browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="primary">Get it on Chrome</Button>
              <Button variant="secondary">Get it on Firefox</Button>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <img
              src="/images/illustration-hero.svg"
              alt="Bookmark Manager Hero"
              className="w-full max-w-lg mx-auto"
            />    
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
