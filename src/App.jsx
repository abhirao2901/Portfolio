import React, { Suspense } from 'react';
import Hero from './sections/Hero';
import { useScrollToTop } from './hooks/useIntersectionObserver';

// Lazy load sections for better performance
const About = React.lazy(() => import('./sections/About'));
const Skills = React.lazy(() => import('./sections/Skills'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Contact = React.lazy(() => import('./sections/Contact'));

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
  </div>
);

const ScrollToTop = () => {
  const [isVisible, scrollToTop] = useScrollToTop();
  
  if (!isVisible) return null;
  
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <main>
        {/* Hero loads immediately */}
        <Hero />
        
        {/* Other sections load lazily */}
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>
      
      <ScrollToTop />
      
      {/* Schema.org structured data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abhishek Rao",
            "jobTitle": "Senior Frontend Engineer",
            "description": "Senior Frontend Engineer specializing in React.js, Shopify, and scalable web applications",
            "url": "https://abhirao2901.github.io/Portfolio",
            "sameAs": [
              "https://www.linkedin.com/in/abhishek-rao-ui-dev/",
              "https://github.com/abhirao2901"
            ],
            "knowsAbout": [
              "React.js",
              "JavaScript", 
              "Shopify",
              "Frontend Development",
              "Performance Optimization",
              "Web Applications"
            ]
          })
        }}
      />
    </div>
  );
}

export default App;
