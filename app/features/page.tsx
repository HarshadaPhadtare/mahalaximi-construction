// pages/index.tsx or pages/home.tsx (depending on your project setup)

import Features from "../screens/Features";
import KeyBenefits from "../screens/KeyBenefits";
import ProjectShowcase from "../screens/ProjectsShowcase";
import Testimonials from "../screens/Testimonials";


export default function Home() {
  return (
    <div>
      {/* You can place your header, navigation, etc. here */}
      
      {/* Features Section */}
      <Features />
      
      {/* Key Benefits Section */}
      <KeyBenefits />
      
      {/* Projects Showcase Section */}
      <ProjectShowcase />
      
      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}
