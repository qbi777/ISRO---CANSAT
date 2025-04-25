import React from 'react';
import { Github, ExternalLink, Youtube } from 'lucide-react';
import StarField from '../components/StarField';
import PageTransition from '../components/PageTransition';

const RepositoryPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen py-16 md:py-24">
        <StarField />
        
        <div className="absolute inset-0 glow-bg z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Explore Our Work</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Dive deep into our project resources, code, and media to learn more about our CANSAT journey.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-space-dark/60 backdrop-blur-lg rounded-lg border border-space-blue/20 p-8 hover:border-space-glow/40 transition-colors flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4 text-space-glow flex items-center">
                <Github className="mr-3 h-6 w-6" />
                GitHub Repository
              </h2>
              
              <p className="text-gray-300 flex-grow mb-6">
                Our complete CANSAT project codebase, documentation, and resources are available on GitHub. 
                Explore our design files, circuit diagrams, software, and documentation to get a 
                comprehensive understanding of our project.
              </p>
              
              <a 
                href="https://github.com/qbi777/ISRO---CANSAT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-space-blue hover:bg-space-blue/80 transition-colors text-white rounded-md font-medium self-start"
              >
                View Repository
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-space-dark/60 backdrop-blur-lg rounded-lg border border-space-blue/20 p-8 hover:border-space-glow/40 transition-colors flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4 text-space-glow flex items-center">
                <Youtube className="mr-3 h-6 w-6" />
                Video Resources
              </h2>
              
              <p className="text-gray-300 flex-grow mb-6">
                Explore our collection of videos showcasing the CANSAT development process, flight tests, 
                and presentations. Visual documentation of our journey from concept to completion.
              </p>
              
              <div className="text-gray-400 italic">
                Video resources coming soon. Check our GitHub repository for updates.
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-12 bg-space-dark/60 backdrop-blur-lg rounded-lg border border-space-blue/20 p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-space-glow">Project Documentation</h2>
            
            <p className="text-gray-300 mb-6">
              Our project is thoroughly documented in various formats:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-space-glow/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-space-glow text-sm font-bold">•</span>
                </div>
                <p className="text-gray-300">
                  <strong>Technical Reports:</strong> PDR and CDR documents detailing our design process,
                  calculations, and technical decisions
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-space-glow/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-space-glow text-sm font-bold">•</span>
                </div>
                <p className="text-gray-300">
                  <strong>3D Models:</strong> Complete CAD files of our CANSAT design, including both
                  stages, shell structure, and wing design
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-space-glow/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-space-glow text-sm font-bold">•</span>
                </div>
                <p className="text-gray-300">
                  <strong>Circuit Diagrams:</strong> Detailed schematics of our electronics systems
                  and sensor integration
                </p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-space-glow/20 flex items-center justify-center mt-0.5 mr-3">
                  <span className="text-space-glow text-sm font-bold">•</span>
                </div>
                <p className="text-gray-300">
                  <strong>Presentation Materials:</strong> Slides and resources from our competition
                  presentations at each stage
                </p>
              </li>
            </ul>
            
            <div className="mt-8 text-center">
              <a 
                href="https://github.com/qbi777/ISRO---CANSAT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-space-glow/90 hover:bg-space-glow transition-colors text-white rounded-md font-medium"
              >
                Access Full Documentation
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default RepositoryPage;