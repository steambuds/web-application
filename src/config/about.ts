import ghanshyamImg from '../images/ghanshyam.jpeg';
import deveshImg from '../images/devesh.png';
import sandeepImg from '../images/sandeep.png';
import govindImg from '../images/govind.png';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Lightbulb,
} from 'lucide-react';

const about = {
    title: "About STEAM Buds",
    description: "We're on a mission to transform education in India by inspiring the next generation of innovators, thinkers, and problem-solvers through hands-on learning experiences.",
    vision:{
        title: "Our Vision",
        subTitle: "Empowering the Next Generation of Innovators",
        description: "To create a future where every Indian student has access to quality hands-on education, where innovation labs are present in every school, and where the spirit of creativity and invention thrives in every classroom across the country."
    },
    mission:{
        title: "Our Mission",
        subTitle: "Transforming Education Through Innovation",
        description: "To inspire and empower the next generation of Indian innovators by providing hands-on learning experiences that transform curiosity into creativity, ideas into innovations, and students into confident problem-solvers who will shape the future of our nation."
    },
    team:{
        title: "Our Team",
        description: "Meet the passionate individuals behind STEAM Buds.",
        members:[
            {
                name: "Ghanshyam",
                role: "Founder & CTO",
                image: ghanshyamImg,
                bio: "NIT graduate with over 8 years of professional software engineering experience. Leads technology strategy and development initiatives to create innovative educational solutions.",
                expertise: ["Software Engineering", "Technology Strategy", "System Architecture"]
            },
            {
                name: "Devesh Singh",
                role: "Founder & CEO",
                image: deveshImg,
                bio: "NIT graduate with 6+ years of experience in teaching robotics and science. Passionate about transforming education through hands-on learning methodologies.",
                expertise: ["Robotics Education", "STEM Teaching", "Curriculum Design"]
            },
            {
                name: "Sandeep Malhotra",
                role: "Founder & Head of Project Management",
                image: sandeepImg,
                bio: "NIT graduate with 8+ years in data engineering and a passion for practical knowledge application. Manages strategic projects and operational excellence.",
                expertise: ["Data Engineering", "Project Management", "Practical Applications"]
            },
            {
                name: "Govind Bajpai",
                role: "Founder & Advisor",
                image: govindImg,
                bio: "NIT graduate with 6+ years as an IBM scientist and expertise in hands-on activity development. Provides strategic guidance and mentorship to the team.",
                expertise: ["Scientific Research", "IBM Technologies", "Activity Development"]
            }
    ]
},
  coreValues: {
    title: "Our Core Values",
    description: "The guiding principles that shape our approach to education and innovation.",
    principles: [
        {
            icon: Lightbulb,
            title: "Learning by Doing",
            description: "We believe the best learning happens when students actively build, create, and experiment with real-world projects."
        },
        {
        icon: Heart,
        title: "Fostering Curiosity",
        description: "Every child is naturally curious. We nurture this curiosity and help students ask better questions and seek innovative solutions."
        },
        {
        icon: Users,
        title: "Collaborative Innovation",
        description: "Great innovations emerge from collaboration. We encourage teamwork, peer learning, and knowledge sharing."
        },
        {
        icon: BookOpen,
        title: "Making Education Fun",
        description: "Learning should be joyful and engaging. We make complex concepts accessible through play, creativity, and hands-on exploration."
      }
    ]
  },
  story: {
    title: "Our Story",
    description: "Four friends' college project evolved into a tech education startup.",
    paragraphs:[
        "Our journey began during our college days at NIT, where Devesh and Ghanshyam first collaborated to set up a small laboratory for their own learning and experimentation. What started as a personal project quickly evolved into something much bigger—a vibrant innovation hub that attracted passionate NITians from across the campus.",
        "As our college lab grew, many talented students joined us, but Sandeep and Govind truly embodied our shared passion for building innovative products and solutions. Together, our team participated in numerous national-level innovation challenges, earning recognition and winning several prestigious competitions that validated our approach to hands-on, practical learning.",
        "After graduation, life took us in different directions as we pursued our individual careers—Ghanshyam in software engineering, Devesh in education, Sandeep in data engineering, and Govind in scientific research at IBM. However, our commitment to student development never wavered. Sandeep and Govind launched workshop programs in their respective fields, while Devesh and Ghanshyam worked on creating a universal learning platform.",
        "Though we maintained awareness of each other's endeavors over the years, it wasn't until recently that we realized the power of combining our diverse expertise and shared vision. The convergence of our individual experiences in education, technology, and innovation naturally led to the birth of STEAM Buds—a platform where our collective passion for transforming education could finally flourish and impact students across India.",
    ]
  },
  achievements: [
    { number: "5000+", label: "Students Impacted" },
    { number: "200+", label: "Schools Partnered" },
    { number: "50+", label: "Innovation Labs Setup" },
    { number: "95%", label: "Student Satisfaction" }
  ]
}

export default about;
