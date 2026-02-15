import Container from '../components/Container';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="relative text-center">
          <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-20 motion-safe:bg-brand-gradient motion-safe:bg-[length:200%_100%] motion-safe:animate-shimmer" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Senior Frontend Engineer
            <span className="block text-gradient">
              Building Scalable React Applications
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            4+ years crafting high-performance SaaS solutions with React.js, Shopify, and modern web technologies. 
            Specialized in architecting scalable frontends that drive measurable business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Featured Projects
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">40%</div>
              <div className="text-sm text-gray-600">Performance Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">25%</div>
              <div className="text-sm text-gray-600">Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime Achieved</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
