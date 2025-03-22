import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { SectionTitle } from '@/components/ui/section-title';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Project data
  const projects = [
    {
      title: "Real-time Person Detection and Emergency Alert System",
      category: "Computer Vision",
      description: "Developed an AI-powered Emergency Detection System using YOLOv11 for real-time object detection and Google Gemini AI for emergency scenario analysis. Integrated a Flask backend, WebRTC for live video streaming, and Celery for asynchronous processing.",
      technologies: ["YOLOv11", "Flask", "WebRTC", "Google Gemini AI", "RESTful APIs", "Celery"],
      achievement: "Secured 2nd place in the Gradient AI Hackathon at BMSCE among 65 competing teams.",
      githubLink: "https://github.com/shreyask5/31_player1_Surveillance-and-Security-",
      demoLink: "#"
    },
    {
      title: "Event Management System with GUI in Java",
      category: "Desktop Application",
      description: "Designed a Java-based event management system with a user-friendly Swing GUI. Implemented password-protected event creation, attendee registration, and real-time event tracking using JOptionPane, ArrayList, and the EventManager class.",
      technologies: ["Java", "Swing GUI", "JFrame", "JPanel", "JButton", "EventManager"],
      githubLink: "https://github.com/mitesh-200228/event-management-system",
      demoLink: "#"
    },
    {
      title: "Driver Safety Monitoring System",
      category: "Computer Vision",
      description: "Developed a real-time Driver Safety Monitoring System integrating a CNN for phone detection, dlib for facial landmark detection (EAR/MAR), and MediaPipe for head pose estimation. Utilized OpenCV for video processing, Flask for front-end visualization, and sound alerts.",
      technologies: ["CNN", "dlib", "MediaPipe", "OpenCV", "Flask"],
      githubLink: "https://github.com/mitumitesh04/Real-time-driver-monitoring-system-.git",
      demoLink: "#"
    },
    {
      title: "Personal Health Analysis using Wearable Device Data",
      category: "Health Tech",
      description: "Engineered a health analytics platform that processes real-time data from wearable sensors to assess sleep patterns, workout efficiency, and physiological trends. Implemented machine learning algorithms for predictive health insights.",
      technologies: ["Python", "Machine Learning", "Biometric Data Analysis"],
      githubLink: "https://github.com/mitumitesh04/Personal-Health-Analysis.git",
      demoLink: "#"
    },
    {
      title: "Sentiment Analysis for Product Reviews",
      category: "Natural Language Processing",
      description: "Created a sentiment analysis tool that evaluates customer reviews and feedback to extract emotional tone and specific product insights. Utilized BERT for natural language understanding and classification.",
      technologies: ["NLP", "BERT", "Python", "Sentiment Analysis"],
      githubLink: "https://github.com/mitesh-200228/sentiment-analysis",
      demoLink: "#"
    },
    {
      title: "Student Performance Prediction System",
      category: "Machine Learning",
      description: "Developed a machine learning system to predict student academic performance based on various factors including study hours, attendance, and engagement metrics.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Neural Networks"],
      githubLink: "https://github.com/mitesh-200228/student-performance-prediction",
      demoLink: "#"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 reveal">
              <div className="flex flex-col gap-3">
                <span className="text-lg text-primary font-medium">Artificial Intelligence Engineer</span>
                <h1 className="heading-xl">
                  Hi, I'm
                  <br />
                  <span className="text-primary">Mitesh J Upadhya</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg mt-2">
                  Building intelligent systems and innovative solutions through AI and machine learning.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="group"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = '/projects'}
                >
                  View Projects
                </Button>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="mailto:jmitesh702@gmail.com" 
                  className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/mitesh-j-8b3847325" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/mitesh-200228" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="relative reveal">
              <div className="aspect-square bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl overflow-hidden flex items-center justify-center shadow-xl">
                <div className="absolute inset-3 glass-card flex items-center justify-center">
                <img src="\pp.jpeg" alt="Profile" className="w-full h-full object-cover rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Overview Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="glass-card p-8 md:p-12 reveal">
            <h2 className="heading-md mb-8 text-center">Skills Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 reveal-children">
              <div className="bg-background/70 p-6 rounded-xl text-center space-y-2">
                <div className="text-primary text-lg font-semibold">Python</div>
                <p className="text-sm text-muted-foreground">Programming</p>
              </div>
              <div className="bg-background/70 p-6 rounded-xl text-center space-y-2">
                <div className="text-primary text-lg font-semibold">TensorFlow</div>
                <p className="text-sm text-muted-foreground">ML Framework</p>
              </div>
              <div className="bg-background/70 p-6 rounded-xl text-center space-y-2">
                <div className="text-primary text-lg font-semibold">OpenCV</div>
                <p className="text-sm text-muted-foreground">Computer Vision</p>
              </div>
              <div className="bg-background/70 p-6 rounded-xl text-center space-y-2">
                <div className="text-primary text-lg font-semibold">Flask</div>
                <p className="text-sm text-muted-foreground">Web Framework</p>
              </div>
              <div className="bg-background/70 p-6 rounded-xl text-center space-y-2">
                <div className="text-primary text-lg font-semibold">MySQL</div>
                <p className="text-sm text-muted-foreground">Database</p>
              </div>
              <div className="bg-background/70 p-6 rounded-xl text-center space-y-2">
                <div className="text-primary text-lg font-semibold">Java</div>
                <p className="text-sm text-muted-foreground">Programming</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = '/skills'}
                className="group"
              >
                View All Skills <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-16">
        <div className="section-container">
          <SectionTitle 
            title="Achievements" 
            subtitle="Recognition and positions of responsibility"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-children">
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">Gradient Hackathon – 2nd Place</h3>
              <p className="text-sm text-muted-foreground">November 2024</p>
              <p className="text-muted-foreground">
                Secured 2nd place among 65 competing teams in the prestigious Gradient AI Hackathon at BMSCE for our innovative AI-powered Emergency Detection System. The project impressed judges with its real-time capabilities and practical applications for public safety scenarios.
              </p>
            </div>
            
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">Senior Coordinator, Business Insights Club</h3>
              <p className="text-sm text-muted-foreground">December 2023 - Present</p>
              <p className="text-muted-foreground">
                Leading initiatives to bridge technical education with business applications at the college-level Business Insights Club. Organize workshops, panel discussions, and industry connect sessions while managing a team of junior coordinators and ensuring successful execution of club events.
              </p>
            </div>
            
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">Junior Coordinator, BMSCE Fest</h3>
              <p className="text-sm text-muted-foreground">May 2023 - Present</p>
              <p className="text-muted-foreground">
                Actively coordinate technical events and workshops for the college's annual technical and cultural festival. Responsible for planning, organizing, and executing multiple events simultaneously while managing event logistics, participant registrations, and coordinating with various stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Projects Section */}
      <section className="py-16">
        <div className="section-container">
          <SectionTitle 
            title="All Projects" 
            subtitle="Explore a collection of my projects showcasing my expertise in AI and software development"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-children">
            {projects.map((project, index) => (
              <div key={index} className="glass-card overflow-hidden group">
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div>
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  {project.achievement && (
                    <div className="bg-primary/5 border border-primary/10 p-3 rounded-md text-sm">
                      <span className="font-medium">Achievement:</span> {project.achievement}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="skill-chip">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="ghost" size="sm" className="gap-1" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> View Code
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ArrowRight className="h-4 w-4" /> Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/projects'}
              className="group"
            >
              View More Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
