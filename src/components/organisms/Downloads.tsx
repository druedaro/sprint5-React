import Button from "../atoms/Button";

const browsers = [
    {name: 'Chrome', version: '62', image: '/images/logo-chrome.svg'},
    {name: 'Firefox', version: '55', image: '/images/logo-firefox.svg'},
    {name: 'Opera', version: '46', image: '/images/logo-opera.svg'}
] as const;

const Downloads = () => {
    return (
       <section id = 'pricing' className="py-16 md:py-24 px-4">
            <div className="container mx-auto text-center max-w-6xl">
                <h2 className="text-4xl md:text-4xl font-semibold capitalize mb-6">Download the extension</h2>
                <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                We've got more browsers in the pipeline. Please do let us know if you've 
                got a favourite you'd like us to prioritize.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
                    {browsers.map((browser, index) => (
                    <div
                        key={browser.name}
                        className={`bg-white rounded-lg shadow-lg p-16
                        ${index === 0 ? 'lg:-translate-y-8' : ''}
                        ${index === 2 ? 'lg:translate-y-8' : ''}
                        mt-12`}
                    >
                    <img src={browser.image} alt={browser.name} className="mx-auto mb-6 h-24" />
                    <h3 className="text-2xl font-semibold mb-2">Add to {browser.name}</h3>
                    <p className="text-gray-600 mb-8">Minimum version {browser.version}</p>
                    <img src="/images/bg-dots.svg" alt="" className="w-full mb-6" />
                    <Button variant="primary">Add & Install Extension</Button>
                    </div>
                ))}
                </div>
            </div>
        </section>
  );
};

export default Downloads;
