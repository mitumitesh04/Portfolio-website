
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-primary">Mitesh<span className="text-foreground">.</span></div>
            <p className="mt-2 text-muted-foreground">Artificial Intelligence and Machine Learning Engineer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="mailto:jmitesh702@gmail.com" 
                className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/mitesh-j-8b3847325" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/mitesh-200228" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mitesh J Upadhya. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
