import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsPage = () => {
  // Project data
  const projects = [
    {
      title: "Real-time Person Detection and Emergency Alert System",
      category: "Computer Vision",
      description: "Developed an AI-powered Emergency Detection System using YOLOv11 for real-time object detection and Google Gemini AI for emergency scenario analysis. Integrated a Flask backend, WebRTC for live video streaming, and Celery for asynchronous processing. The system can identify potential emergency situations like accidents, fires, or medical emergencies and alert relevant authorities.",
      technologies: ["YOLOv11", "Flask", "WebRTC", "Google Gemini AI", "RESTful APIs", "Celery"],
      achievement: "Secured 2nd place among 65 teams in the Gradient AI Hackathon at BMSCE.",
      githubLink: "https://github.com/shreyask5/31_player1_Surveillance-and-Security-Systems.git",
      demoLink: "#"
    },
    {
      title: "Legal RAG Assistant",
      category: "AI/NLP, LegalTech",
      description: "A powerful Legal Research Assistant powered by Retrieval Augmented Generation (RAG) technology, built with Langflow and featuring an intelligent chat interface for legal document analysis. Supports semantic search, citation, and Indian legal expertise.",
      technologies: ["Langflow", "Python", "AstraDB", "Google Gemini AI", "LangChain"],
      githubLink: "https://github.com/mitumitesh04/Legal-RAG-assistance.git",
      demoLink: "#"
    },
    {
      title: "Health Risk Analysis MLOps",
      category: "MLOps, HealthTech",
      description: "End-to-end MLOps pipeline for health risk prediction with Docker, FastAPI, Streamlit, and MLflow. Features automated model training, evaluation, deployment, and monitoring for healthcare data.",
      technologies: ["Python", "FastAPI", "MLflow", "Streamlit", "Docker"],
      githubLink: "https://github.com/mitumitesh04/Health-risk-analysis-mlops.git",
      demoLink: "#"
    },
    {
      title: "Event Management System with GUI in Java",
      category: "Desktop Application",
      description: "Designed a Java-based event management system with a user-friendly Swing GUI. Implemented password-protected event creation, attendee registration, and real-time event tracking using JOptionPane, ArrayList, and the EventManager class. Features include event creation, modification, cancellation, attendee management, and reporting capabilities.",
      technologies: ["Java", "Swing GUI", "JFrame", "JPanel", "JButton", "EventManager"],
      githubLink: "https://github.com/mitesh-200228/event-management-system",
      demoLink: "#"
    },
    {
      title: "Driver Safety Monitoring System",
      category: "Computer Vision",
      description: "Developed a real-time Driver Safety Monitoring System integrating a CNN for phone detection, dlib for facial landmark detection (EAR/MAR), and MediaPipe for head pose estimation. Utilized OpenCV for video processing, Flask for front-end visualization, and sound alerts for driver warnings. The system can detect drowsiness, distraction, and improper posture to prevent accidents.",
      technologies: ["CNN", "dlib", "MediaPipe", "OpenCV", "Flask", "Python"],
      githubLink: "https://github.com/mitumitesh04/Real-time-driver-monitoring-system-.git",
      demoLink: "#"
    },
    {
      "title": "Customer Segmentation and Analysis",
      "category": "Data Visualization & Analytics",
      "description": "Developed an interactive Tableau dashboard to analyze customer data, segment users based on demographics and behavior, and visualize purchasing trends. Implemented RFM (Recency, Frequency, Monetary) analysis to identify high-value customers and optimize marketing strategies. Provided insights into revenue contribution, spending patterns, and customer distribution.",
      "technologies": ["Tableau", "Data Visualization", "Customer Segmentation", "Python"],
      "githubLink": "https://github.com/mitumitesh04/Customer-segmentation.git",
      "demoLink": "#"
    }
  ];

  return (
    <div className="section-container">
      <SectionTitle 
        title="Projects" 
        subtitle="A collection of my work that demonstrates my skills and experience in different areas of AI and development."
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
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
