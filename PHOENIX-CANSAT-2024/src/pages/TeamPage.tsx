import React from 'react';
import StarField from '../components/StarField';
import PageTransition from '../components/PageTransition';

const TeamPage: React.FC = () => {
  // Convert GitHub image URL to raw content URL
  const teamImageUrl = 'https://raw.githubusercontent.com/qbi777/ISRO---CANSAT/main/IMG_9026.jpg';

  return (
    <PageTransition>
      <div className="relative min-h-screen py-16 md:py-24">
        <StarField />
        
        <div className="absolute inset-0 glow-bg z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">Meet Our Team – Team Phoenix</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The innovative minds behind the CANSAT project, bringing together diverse skills and unified passion.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden border border-space-blue/30 glow-border">
              <img 
                src={teamImageUrl} 
                alt="Team Phoenix" 
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg';
                }}
              />
            </div>
            
            <div className="mt-12 bg-space-dark/60 backdrop-blur-lg rounded-lg border border-space-blue/20 p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-space-glow">Our Collective Strengths</h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Team Phoenix brings together engineering students with diverse backgrounds and complementary skills. 
                  Our team combines expertise in aerospace engineering, electronics, programming, 3D modeling, and 
                  project management to create an innovative CANSAT solution.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Each team member plays a crucial role in our success, from conceptual design and structural 
                  engineering to electronics integration and data analysis. It's this collaborative spirit and 
                  multidisciplinary approach that makes Team Phoenix truly exceptional.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Under the guidance of our mentors and with support from our institution, we've pushed the 
                  boundaries of what's possible in the CANSAT competition, achieving remarkable results at 
                  each stage of the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TeamPage;