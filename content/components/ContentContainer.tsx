import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';

interface PageTransitionProps {
  isActive: boolean;
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ isActive, children }) => {
  return (
    <div
      className={`transition-all duration-300 ease-in-out absolute w-full
        ${isActive 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-8 pointer-events-none'
        }`}
    >
      {children}
    </div>
  );
};

const ContentContainer: React.FC = () => {
  const { activePage } = useNavigation();

  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="relative">
        <PageTransition isActive={activePage === 'home'}>
          <HomePage />
        </PageTransition>
        
        <PageTransition isActive={activePage === 'about'}>
          <AboutPage />
        </PageTransition>
        
        <PageTransition isActive={activePage === 'services'}>
          <ServicesPage />
        </PageTransition>
        
        <PageTransition isActive={activePage === 'contact'}>
          <ContactPage />
        </PageTransition>
      </div>
    </div>
  );
};

export default ContentContainer;