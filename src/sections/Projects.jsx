import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';

const Projects = () => {
  const projects = [
    {
      title: 'High-Performance Shopify Store',
      category: 'E-Commerce',
      problem: 'Legacy storefront with 4.2s load time and 12% conversion rate needed complete performance overhaul.',
      solution: 'Rebuilt theme with modern Liquid patterns, implemented lazy loading, optimized images, and added advanced filtering.',
      impact: '25% conversion increase, 60% faster load times, 95+ Lighthouse score',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'Shopify CLI'],
      github: 'https://github.com/yourusername/shopify-performance-store',
      demo: 'https://store-demo.com',
      highlights: ['Advanced product filtering', 'Mobile-first checkout flow', 'A/B tested layouts']
    },
    {
      title: 'React SaaS Dashboard',
      category: 'SaaS Platform',
      problem: 'Complex analytics dashboard serving 10K+ DAU needed better performance and real-time capabilities.',
      solution: 'Architected modular React app with lazy-loaded routes, real-time WebSocket integration, and optimized data visualization.',
      impact: '40% bundle size reduction, real-time updates, 99.9% uptime',
      tech: ['React.js', 'TypeScript', 'React Query', 'WebSockets', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/saas-dashboard',
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
      github: 'https://github.com/yourusername/fullstack-app',
      demo: 'https://app-demo.com',
      highlights: ['OAuth integration', 'Progressive Web App', 'Multi-tenant architecture']
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white">
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
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
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
    </section>
  );
};

export default Projects;
