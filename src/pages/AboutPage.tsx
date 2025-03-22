
import { SectionTitle } from "@/components/ui/section-title";

const AboutPage = () => {
  return (
    <div className="section-container">
      <SectionTitle 
        title="About Me" 
        subtitle="Artificial Intelligence Engineer specializing in machine learning, computer vision, and real-time applications."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-3 reveal">
          <div className="glass-card p-8 space-y-6">
            <p className="text-lg">
              I'm Mitesh J Upadhya, an Artificial Intelligence and Machine Learning Engineer based in Bengaluru, Karnataka, India. I'm currently pursuing my B.M.S in Artificial Intelligence and Machine Learning at B.M.S College of Engineering, where I maintain a CGPA of 8/10.
            </p>
            <p>
              My passion lies in building intelligent systems that solve real-world problems. I've worked on projects involving computer vision, emergency detection systems, and driver safety monitoring applications. My technical skills include proficiency in Python, Java, TensorFlow, and various ML libraries.
            </p>
            <p>
              Beyond technical skills, I actively participate in campus activities as a Senior Coordinator at the Business Insights Club and Junior Coordinator for BMSCE Fest, where I've developed strong leadership and team management abilities.
            </p>
            <p>
              I believe in the power of AI to transform industries and improve lives. My goal is to continue learning and growing in this rapidly evolving field while creating innovative solutions that make a meaningful impact.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-2 reveal">
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-6">Education</h3>
            <div className="space-y-8">
              <div className="timeline-item">
                <div className="font-semibold text-primary">B.M.S College of Engineering</div>
                <div className="text-sm text-muted-foreground">August 2022 - May 2026</div>
                <div className="mt-2">Artificial Intelligence and Machine Learning</div>
                <div className="text-sm">CGPA: 8/10</div>
              </div>
              
              <div className="timeline-item">
                <div className="font-semibold text-primary">Presidency College</div>
                <div className="text-sm text-muted-foreground">June 2020 - May 2022</div>
                <div className="mt-2">PCMC (Physics, Chemistry, Mathematics, Computer Science)</div>
                <div className="text-sm">Percentage: 82%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 reveal">
        <div className="glass-card p-8">
          <h3 className="text-xl font-semibold mb-6">Achievements & Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-children">
            <div className="bg-background/70 p-6 rounded-xl space-y-2">
              <div className="font-semibold text-primary">Gradient Hackathon - 2nd Place</div>
              <div className="text-sm text-muted-foreground">November 2024</div>
              <p className="mt-2 text-sm">
                Secured 2nd place among 65 competing teams in the prestigious Gradient AI Hackathon at BMSCE. Developed an innovative AI-powered Emergency Detection System that impressed judges with its real-time capabilities and practical applications for public safety scenarios. The project utilized YOLOv11 for detection and Google Gemini AI for scenario analysis.
              </p>
            </div>
            
            <div className="bg-background/70 p-6 rounded-xl space-y-2">
              <div className="font-semibold text-primary">Senior Coordinator, Business Insights Club</div>
              <div className="text-sm text-muted-foreground">Dec 2023 - Present</div>
              <p className="mt-2 text-sm">
                Leading initiatives to bridge technical education with business applications at the college-level Business Insights Club. Organize workshops, panel discussions, and industry connect sessions. Developed leadership skills while managing a team of junior coordinators and ensuring successful execution of club events. Created networking opportunities for students with industry professionals.
              </p>
            </div>
            
            <div className="bg-background/70 p-6 rounded-xl space-y-2">
              <div className="font-semibold text-primary">Senior Coordinator, BMSCE Fest</div>
              <div className="text-sm text-muted-foreground">April 2025 - May 2025</div>
              <p className="mt-2 text-sm">
                Actively coordinate technical events and workshops for the college's annual technical and cultural festival. Responsible for planning, organizing, and executing multiple events simultaneously. Developed strong organizational and time management skills through managing event logistics, participant registrations, and coordinating with various stakeholders to ensure smooth functioning of the fest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
