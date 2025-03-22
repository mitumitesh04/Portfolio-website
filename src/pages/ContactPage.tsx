import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create the email body with all the form information
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    // Create the Gmail URL with pre-filled information
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jmitesh702@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');

    // Reset the form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <div className="section-container">
      <SectionTitle 
        title="Contact Me" 
        subtitle="Feel free to reach out for collaboration opportunities, project discussions, or job inquiries."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="reveal">
          <div className="glass-card p-8 h-full space-y-8">
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <p className="text-muted-foreground">
              I'm currently looking for new opportunities and challenges in the field of AI and Machine Learning. Whether you have a project idea, a job opportunity, or just want to connect, I'll try my best to get back to you promptly!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:jmitesh702@gmail.com" className="font-medium hover:text-primary transition-colors">
                    jmitesh702@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a href="tel:+917795198616" className="font-medium hover:text-primary transition-colors">
                    +91 7795198616
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">
                    Bengaluru, Karnataka, India
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                  <a 
                    href="https://linkedin.com/in/mitesh-j-8b3847325" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    linkedin.com/in/mitesh-j-8b3847325
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">GitHub</div>
                  <a 
                    href="https://github.com/mitesh-200228" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    github.com/mitesh-200228
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="font-medium mb-2">Available For:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="skill-chip">Full-time Positions</span>
                <span className="skill-chip">Internships</span>
                <span className="skill-chip">Freelance Projects</span>
                <span className="skill-chip">Collaborations</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="reveal">
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="w-full min-h-32"
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
