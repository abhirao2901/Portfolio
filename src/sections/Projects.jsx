import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
  const [setRefCallback, isVisible] = useIntersectionObserver({ threshold: 0.14 });
  
  const projects = [
    {
      title: 'Shoppify Health Kart - High-Performance Store',
      category: 'E-Commerce',
      problem: 'Health supplement e-commerce store needed modern design, optimized performance, and better user experience for health-conscious consumers.',
      solution: 'Built comprehensive Shopify store with custom theme, product filtering, responsive design, and optimized checkout flow for health supplements.',
      impact: 'Modern e-commerce experience, mobile-optimized design, fast loading performance',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'Responsive Design', 'E-commerce'],
      github: 'https://github.com/abhirao2901/Shoppify-Health-Kart',
      demo: 'https://abhirao2901.github.io/Shoppify-Health-Kart/',
      highlights: ['Health supplement focus', 'Mobile-first design', 'Product categorization', 'Optimized checkout']
    },
    {
      title: 'React SaaS Dashboard',
      category: 'SaaS Platform',
      problem: 'Complex analytics dashboard serving 10K+ DAU needed better performance and real-time capabilities.',
      solution: 'Architected modular React app with lazy-loaded routes, real-time WebSocket integration, and optimized data visualization.',
      impact: '40% bundle size reduction, real-time updates, 99.9% uptime',
      tech: ['React.js', 'TypeScript', 'React Query', 'WebSockets', 'Tailwind CSS'],
      github: 'https://github.com/abhirao2901/saas-dashboard',
      demo: 'https://dashboard-demo.com',
      highlights: ['Real-time analytics', 'Role-based access control', 'Export functionality']
    },
    {
      title: 'Full-Stack Web Application',
      category: 'Web Application',
      problem: 'Startup needed MVP built in 8 weeks with modern tech stack and scalable architecture.',
      solution: 'Developed complete frontend with React, integrated REST APIs, implemented authentication and responsive design.',
      impact: '$2M+ platform revenue, 500+ enterprise users, 15+ integrations',
      tech: ['React.js', 'Node.js', 'REST APIs', 'JWT Auth', 'Responsive Design'],
      github: 'https://github.com/abhirao2901/fullstack-app',
      demo: 'https://app-demo.com',
      highlights: ['OAuth integration', 'Progressive Web App', 'Multi-tenant architecture']
    }
  ];

  return (
    <section 
      id="projects" 
      ref={setRefCallback}
      className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24"
      aria-label="Featured Projects"
    >
      <div className={`transition-opacity duration-500 motion-safe:animate-fade-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Production applications delivering measurable business results
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                      <p className="text-gray-600">{project.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{project.solution}</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Impact</h4>
                      <p className="text-green-700 font-medium">{project.impact}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2.5 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-700 motion-safe:opacity-0 motion-safe:animate-fade-up"
                          style={{ animationDelay: `${techIndex * 60}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Button 
                      variant="primary" 
                      size="sm"
                      href={project.demo}
                    >
                      View Live Demo
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      href={project.github}
                    >
                      View Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
      </div>
    </section>
  );
};

export default Projects;
