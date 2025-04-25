import React from 'react';
import Carousel from '../components/Carousel';
import StarField from '../components/StarField';
import PageTransition from '../components/PageTransition';

const GalleryPage: React.FC = () => {
  const images = [
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/inner_shellAndWings_attached.png',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/inner_shellAndWings.png',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/cansat_ph_circuit_board.jpg',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/Cansat_invite.png',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/CANSAT_plan.png',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/CANSAT_overall_transparent.png',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/CANSAT_overall.png',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/CANSAT_innerShell.png',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/3D_designed_1st_stage_look.jpeg',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/3D%20visualisation.jpg',
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/2nd_stage_3D_design.jpeg'
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen py-16 md:py-24">
        <StarField />
        
        <div className="absolute inset-0 glow-bg z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Gallery</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our CANSAT project through images of design, development, and implementation.
            </p>
          </div>
          
          <div className="py-8">
            <Carousel 
              images={images}
              showMultiple={true}
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 italic">
              The gallery showcases our design process, prototypes, and the final CANSAT implementation.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default GalleryPage;