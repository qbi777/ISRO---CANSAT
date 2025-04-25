import React from 'react';
import { CheckCircle } from 'lucide-react';
import StarField from '../components/StarField';
import PageTransition from '../components/PageTransition';

const InnovationPage: React.FC = () => {
  const stages = [
    {
      name: 'PDR',
      description: 'Preliminary Design Review - Initial concept and design validation'
    },
    {
      name: 'CDR',
      description: 'Critical Design Review - Detailed design evaluation and approval'
    },
    {
      name: 'Jury Review',
      description: 'Thorough assessment by aerospace experts from ISRO and academia'
    },
    {
      name: 'Flight Readiness Review',
      description: 'Final evaluation ensuring all systems are go for launch'
    },
    {
      name: 'CANSAT Grand Finale',
      description: 'Held in Ahmedabad\'s IN-SPACe, powered by ISRO, IN-SPACe, and ASI'
    }
  ];

  const innovations = [
    {
      title: 'Custom Wing Design',
      description: 'Aerodynamically optimized wings for stable descent and data collection'
    },
    {
      title: 'Inner Shell Structure',
      description: 'Reinforced inner shell providing protection for sensitive electronics and instruments'
    },
    {
      title: 'Dual-Stage Concept',
      description: 'Revolutionary two-stage deployment system for enhanced mission capabilities'
    },
    {
      title: 'Electronics Integration',
      description: 'Seamless integration of sensors, power systems, and communication modules'
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen py-16 md:py-24">
        <StarField />
        
        <div className="absolute inset-0 glow-bg z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Innovations in Our CANSAT Project</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the breakthrough innovations that set our project apart in the CANSAT competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {innovations.map((innovation, index) => (
              <div 
                key={index} 
                className="bg-space-dark/60 backdrop-blur-lg rounded-lg border border-space-blue/20 p-6 hover:border-space-glow/40 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 text-space-glow">{innovation.title}</h3>
                <p className="text-gray-300">{innovation.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Milestones</h2>
            <div className="relative">
              {/* Vertical line connecting the stages */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-space-blue/50 transform md:-translate-x-0.5"></div>
              
              <div className="space-y-12">
                {stages.map((stage, index) => (
                  <div key={index} className="relative">
                    <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-1.5">
                        <div className="h-8 w-8 rounded-full bg-space-dark border-2 border-space-glow flex items-center justify-center glow-border">
                          <CheckCircle className="h-4 w-4 text-space-glow" />
                        </div>
                      </div>
                      
                      <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                        <div className="bg-space-dark/60 backdrop-blur-lg rounded-lg border border-space-blue/20 p-6">
                          <h3 className="text-xl font-bold text-white mb-2">{stage.name}</h3>
                          <p className="text-gray-300">{stage.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 italic max-w-2xl mx-auto">
              Our innovations and successful progression through all stages of the CANSAT competition 
              demonstrate Team Phoenix's commitment to excellence in aerospace engineering.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default InnovationPage;