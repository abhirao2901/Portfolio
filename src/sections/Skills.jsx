import Container from '../components/Container';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3', 'React Router', 'Context API', 'React Hooks']
    },
    {
      title: 'Styling',
      skills: ['Tailwind CSS', 'Styled Components', 'CSS Modules', 'Sass/SCSS', 'CSS-in-JS', 'Responsive Design']
    },
    {
      title: 'E-Commerce',
      skills: ['Shopify', 'Liquid', 'Shopify CLI', 'Storefront API', 'Admin API', 'Checkout Extensions', 'Theme Development']
    },
    {
      title: 'APIs & Data',
      skills: ['REST APIs', 'GraphQL', 'Axios', 'React Query', 'JSON', 'WebSockets', 'OAuth']
    },
    {
      title: 'Tools & Workflow',
      skills: ['Git', 'Webpack', 'NPM/Yarn', 'ESLint', 'Prettier', 'Jest', 'React Testing Library', 'Storybook']
    },
    {
      title: 'Performance',
      skills: ['Code Splitting', 'Lazy Loading', 'Bundle Analysis', 'Core Web Vitals', 'Lighthouse', 'Performance Profiling']
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern frontend technologies and frameworks powering scalable web applications
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
