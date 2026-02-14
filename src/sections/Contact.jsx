import Container from '../components/Container';
import Button from '../components/Button';

const Contact = () => {
  const contactMethods = [
    {
      type: 'Email',
      value: 'alex.kumar@email.com',
      href: 'mailto:alex.kumar@email.com',
      description: 'Best for project inquiries and opportunities'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/alexkumar',
      href: 'https://linkedin.com/in/alexkumar',
      description: 'Professional network and career updates'
    },
    {
      type: 'GitHub',
      value: 'github.com/alexkumar',
      href: 'https://github.com/alexkumar',
      description: 'Code samples and open source contributions'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Open to new opportunities, consulting projects, and interesting conversations about frontend architecture.
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm currently available for senior frontend roles at innovative SaaS companies 
                  and e-commerce brands. Particularly interested in React-focused positions with 
                  remote flexibility.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white">{method.type}</div>
                        <div className="text-primary-400 text-sm">{method.value}</div>
                        <div className="text-gray-400 text-sm mt-1">{method.description}</div>
                      </div>
                      <div className="text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">What I'm Looking For</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Senior Frontend Engineer roles (React focus)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Remote-first or hybrid opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>SaaS and e-commerce product companies</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Architecture and mentoring responsibilities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Performance-focused development culture</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <Button 
                  variant="primary" 
                  className="w-full"
                  href="mailto:alex.kumar@email.com?subject=Frontend Engineer Opportunity"
                >
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
