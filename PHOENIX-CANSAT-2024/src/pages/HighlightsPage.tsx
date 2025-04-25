import React from 'react';
import Carousel from '../components/Carousel';
import StarField from '../components/StarField';
import PageTransition from '../components/PageTransition';

const HighlightsPage: React.FC = () => {
  const images = [
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/Cansat-ASI%202022-016/1.png',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/Cansat-ASI%202022-016/2.png',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/Cansat-ASI%202022-016/3.png',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/Cansat-ASI%202022-016/4.png'
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen py-16 md:py-24">
        <StarField />
        
        <div className="absolute inset-0 glow-bg z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Project Highlights</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key moments and achievements from our CANSAT journey.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Carousel 
              images={images}
              title="CANSAT Competition Highlights"
              description="Showcasing our journey through the CANSAT competition, from development to the final presentation."
            />
            
            <div className="mt-16 bg-space-dark/60 backdrop-blur-lg rounded-lg border border-space-blue/20 p-8">
              <h2 className="text-2xl font-bold mb-6 text-space-glow">Key Achievements</h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-space-glow/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-space-glow text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-300">Successfully completed all stages of the CANSAT competition, from PDR to the Grand Finale</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-space-glow/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-space-glow text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-300">Developed an innovative dual-stage CANSAT with custom wings and specialized inner shell structure</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-space-glow/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-space-glow text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-300">Integrated sophisticated electronics and sensor systems for accurate data collection</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-space-glow/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-space-glow text-sm font-bold">4</span>
                  </div>
                  <p className="text-gray-300">Received recognition from ISRO and IN-SPACe experts for innovation and technical excellence</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-space-glow/20 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-space-glow text-sm font-bold">5</span>
                  </div>
                  <p className="text-gray-300">Successfully presented at the CANSAT Grand Finale in Ahmedabad's IN-SPACe</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HighlightsPage;