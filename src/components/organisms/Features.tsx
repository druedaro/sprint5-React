import { useState } from "react";
import { features } from "../../data";
import Button from "../atoms/Button";

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id = 'features' className="py-16 md:py-16 px-4 overflow-x-hidden">
      <div className="container mx-auto text-center max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Features</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Our aim is to make it quick and easy for you to access your favourite websites.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center mb-16 border-b">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              className={`py-4 px-8 text-lg font-medium border-b-4 ${
                activeTab === index 
                  ? 'border-red-500 text-red-500' 
                  : 'border-transparent text-gray-600 hover:text-red-500'
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center overflow-x-hidden">
          <img 
            src={features[activeTab].image} 
            alt={features[activeTab].title}
            className="w-full max-w-lg mx-auto h-auto object-contain"
          />
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-6">{features[activeTab].title}</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {features[activeTab].description}
            </p>
            <Button variant="primary">More Info</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
