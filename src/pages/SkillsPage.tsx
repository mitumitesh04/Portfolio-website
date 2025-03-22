import { useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState("technical");

  // Skills data
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "SQL", "C++"]
    },
    {
      category: "Machine Learning & AI",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "NLP"]
    },
    {
      category: "Data Processing & Analysis",
      skills: ["MS Excel", "PowerBI", "Tableau", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Data Preprocessing", "Feature Engineering"]
    },
    {
      category: "Web Development",
      skills: ["Flask", "React", "HTML", "CSS", "RESTful APIs", "WebRTC"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Google Colab", "Jupyter Notebook", "Docker", "VS Code"]
    },
    {
      category: "Database Systems",
      skills: ["MySQL", "PostgreSQL"]
    }
  ];

  const softSkills = [
    "Leadership",
    "Teamwork",
    "Problem-Solving",
    "Communication",
    "Time Management",
    "Project Management"
  ];

  return (
    <div className="section-container">
      <SectionTitle 
        title="Skills & Expertise" 
        subtitle="My technical capabilities and soft skills that I've developed through education, projects, and extracurricular activities."
      />
      
      <Tabs defaultValue="technical" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
          <TabsTrigger value="technical" className="text-lg py-3">Technical Skills</TabsTrigger>
          <TabsTrigger value="soft" className="text-lg py-3">Soft Skills</TabsTrigger>
        </TabsList>
        
        <TabsContent value="technical" className="reveal-children">
          <div className="space-y-8">
            {technicalSkills.map((item, index) => (
              <div key={index} className="glass-card p-6 space-y-4">
                <h3 className="text-xl font-semibold text-primary">{item.category}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="skill-chip">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="soft" className="reveal-children">
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-lg font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkillsPage;
