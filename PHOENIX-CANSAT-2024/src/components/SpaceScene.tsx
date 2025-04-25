import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface SpaceSceneProps {
  className?: string;
}

const SpaceScene: React.FC<SpaceSceneProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
    });

    const starsVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Create Earth
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthTexture = new THREE.TextureLoader().load(
      'https://i.imgur.com/iEMcK5E.jpg' // Earth texture image
    );
    const earthMaterial = new THREE.MeshBasicMaterial({
      map: earthTexture,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(-2, -1, -3);
    scene.add(earth);

    // Create Moon
    const moonGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const moonTexture = new THREE.TextureLoader().load(
      'https://i.imgur.com/xIWYKc2.jpg' // Moon texture image
    );
    const moonMaterial = new THREE.MeshBasicMaterial({
      map: moonTexture,
    });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(2, 1, -1);
    scene.add(moon);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate stars
      stars.rotation.y += 0.0001;
      stars.rotation.z += 0.0001;

      // Rotate Earth and Moon
      earth.rotation.y += 0.001;
      moon.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      scene.clear();
    };
  }, []);

  return <div ref={containerRef} className={`absolute inset-0 ${className}`} />;
};

export default SpaceScene;