import {
  Award,
  BookOpen,
  UserCheck,
  Clock,
  Users,
  Timer,
  Shield,
  Group,
  Play,
  TerminalSquare,
  BrainCircuit
} from 'lucide-react';
const services = {
    title: "Our Services",
    description: "Expert teachers for schools and direct private workshops for students",
    forStudents: {
        title: "Private Workshops for Students",
        subTitle: "Inspiring the next generation of STEAM leaders",
        description: "Private workshops for students who want to learn directly from our expert educators. We develop problem-solving skills, feasibility analysis, social relevance, potential impact, novelty, and questioning abilities through hands-on STEAM projects.",
        Highlights:[
            {
                icon: Users,
                title:"Small batch sizes for personalized attention",
                content: "We maintain small class sizes to ensure that each student receives personalized attention and support."
            },
            {
                icon: Timer,
                title:"No pressure of deadlines",
                content: "We believe in allowing students to learn at their own pace, without the pressure of strict timelines."
            },
            {
                icon: BookOpen,
                title:"Focus on curiosity and exploration",
                content: "Our workshops are designed to foster a love of learning and encourage students to explore their interests."
            },
            {
                icon: Shield,
                title:"Safety first",
                content: "We prioritize safety in all our workshops, ensuring a secure and supportive environment for students to explore and learn."

            },
            {
                icon: Group,
                title: "Collaborative Learning",
                content: "Our workshops encourage collaboration and teamwork, helping students develop essential social skills."
                
            }
        ],
        detail:{
            about: "Our age-appropriate classes are designed to nurture curiosity, develop interdisciplinary skills, and build confidence in young minds. Through project-based learning, students explore the connections between Science, Technology, Engineering, Art, and Medicine in a supportive and engaging environment.",
            focus:[
                {
                    title: "STEAM Explorers (Ages 8-12)",
                    sessionTime: "2 hours/week",
                    description: "We prioritize safety in all our workshops, ensuring a secure and supportive environment for students to explore and learn.",
                    highlight:[
                        "Safety first", "Fun and engaging activities", "Collaborative projects", "Basics of STEAM"
                    ]
                },
                {
                    title: "STEAM Innovators (Ages 13-15)",
                    sessionTime: "3 hours/week",
                    description: "Advanced interdisciplinary projects combining science, technology, art, and medicine.",
                    highlight:[
                        "No pressure of deadlines", "Encouragement of self-directed learning", "Focus on real-world applications", "Practical uses of STEAM"
                    ]
                },
                {
                    title: "STEAM Leaders (Ages 16-18)",
                    sessionTime: "4 hours/week",
                    content: "Professional-level interdisciplinary projects preparing students for STEAM careers",
                    highlight:[
                        "gradual learning", "Peer-to-peer learning", "Building a supportive community", "project management"
                    ]
                },
            ]
        }
    },
    forSchools: {
        title: "Expert Teachers for Schools",
        subTitle: "Empowering schools with dedicated expert educators",
        description: "We provide expert teachers to schools who specialize in ATL labs and project making. Our educators teach students problem-solving skills, feasibility, social relevance, potential impact, novelty, and questioning through building innovative STEAM projects.",
        detail:{
            about: "Our expert teachers bring a wealth of knowledge and experience to the classroom, fostering a love for learning and encouraging students to think critically and creatively.",
            focus:[
                {  
                    title: "Highly Qualified Educators",
                    icon: Award,
                    content: "Our educators are highly qualified and experienced in their respective fields, ensuring that students receive the best possible guidance."
                },
                {
                    title: "Always Online Support",
                    icon: UserCheck,
                    content: "We provide continuous online support for students, ensuring that help is always available when needed."
                },
                {
                    title: "Tailored Learning Experiences",
                    icon: BookOpen,
                    content: "We understand that every student is unique, and we tailor our teaching methods to meet the individual needs of each learner."
                },
                {
                    title: "No pressure Learning Environment",
                    icon: Clock,
                    content: "We believe in allowing students to learn at their own pace, without the pressure of strict timelines."
                },
                
            ]
    },
        Highlights:[
            {
                title:"ATL lab specialists and project-making experts",
                icon: Award
            },
            {
                title:"Age-appropriate curriculum for grades 6-12",
                icon: Play
            },
            {
                title:"80+ hours of Offline teaching",
                icon: TerminalSquare
            },
            {
                title:"All day online support",
                icon: UserCheck
            },
            {
                title:"Focus on innovation and critical thinking",
                icon: BrainCircuit
            },
        ]
    }
}


export default services;