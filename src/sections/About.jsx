import Container from '../components/Container';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const [setRefCallback, isVisible] = useIntersectionObserver({ threshold: 0.14 });
  
  return (
    <section 
      id="about" 
      ref={setRefCallback}
      className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24"
      aria-label="About Abhishek Rao"
    >
      <div className={`transition-opacity duration-500 motion-safe:animate-fade-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Engineering Solutions That Scale
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Senior Frontend Engineer with 4+ years of experience architecting and delivering 
                high-performance React applications for SaaS companies and e-commerce platforms.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in building scalable frontend systems that directly impact business metrics. 
                My recent work includes optimizing a Shopify storefront that increased conversions by 25% 
                and developing a React dashboard serving 10K+ daily active users.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Expert in modern React patterns, performance optimization, and creating accessible 
                user interfaces. I thrive in remote-first environments and have successfully 
                collaborated with distributed teams across multiple time zones.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Core Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• React.js ecosystem & modern patterns</li>
                  <li>• Performance optimization & Core Web Vitals</li>
                  <li>• Shopify & Liquid templating</li>
                  <li>• REST/GraphQL API integration</li>
                  <li>• Responsive design & accessibility</li>
                  <li>• Team leadership & mentoring</li>
                </ul>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Business Impact</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reduced bundle size by 40% through code splitting</li>
                  <li>• Improved Lighthouse scores to 95+ across metrics</li>
                  <li>• Led frontend architecture for $2M+ revenue platform</li>
                  <li>• Mentored 3 junior developers to mid-level</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      </div>
    </section>
  );
};

export default About;
