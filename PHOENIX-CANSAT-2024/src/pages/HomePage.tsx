import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpaceScene from '../components/SpaceScene';
import PageTransition from '../components/PageTransition';

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col">
        <SpaceScene className="z-0" />
        
        <div className="absolute inset-0 glow-bg z-0"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 flex-grow flex flex-col items-center justify-center relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text">
              CANSAT INDIA – TEAM PHOENIX
            </h1>
            
            <h2 className="text-lg md:text-2xl font-light mb-8 text-gray-300">
              Pioneering Innovation in Aerospace
            </h2>
            
            <div className="space-y-8 mt-12">
              <div className="max-w-2xl mx-auto p-6 bg-space-dark/60 backdrop-blur-lg rounded-lg border border-space-blue/20 animation-float">
                <h3 className="text-2xl font-bold mb-4 text-space-glow">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our vision at Team Phoenix is to lead the forefront of aerospace innovation, setting new standards of excellence and pioneering breakthroughs that propel humanity towards the stars. We envision a future where boundaries are transcended, and possibilities are limitless, where every challenge is met with innovation and every endeavor is driven by passion.
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto p-6 bg-space-dark/60 backdrop-blur-lg rounded-lg border border-space-blue/20">
                <h3 className="text-2xl font-bold mb-4 text-space-glow">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  At Team Phoenix, our mission is to redefine the possibilities of aerospace engineering through innovation, collaboration, and a relentless pursuit of excellence. We are committed to pushing the boundaries of technological advancement, crafting solutions that not only meet but exceed the demands of the CANSAT challenge.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <Link 
                to="/gallery" 
                className="inline-flex items-center px-6 py-3 bg-space-glow/90 hover:bg-space-glow transition-colors text-white rounded-md font-medium group"
              >
                Explore Our Gallery
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;