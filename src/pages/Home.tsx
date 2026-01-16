import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useIntroAnimation } from '../context/IntroAnimationContext';
import { getRoleDefaultRoute } from '../utils/auth';
import AnimatedIntro from '../components/AnimatedIntro';
import FullScreenSection from '../components/FullScreenSection';

// Import images for slideshows
import studentImg1 from '../images/student_group_activity.webp';
import studentImg2 from '../images/student_project_showcase.webp';
import studentImg3 from '../images/student_responses.png';

import researchImg1 from '../images/harvard_pz.png';
import researchImg2 from '../images/ncf_2023.png';
import researchImg3 from '../images/oecd_2030.png';
import researchImg4 from '../images/12_pillar_skills.png';

import sessionImg1 from '../images/bloom_taxanomy.png';
import sessionImg2 from '../images/riasec.png';
import sessionImg3 from '../images/pillars_of_lesson.png';
import sessionImg4 from '../images/scafolding.png';

import cohortImg1 from '../images/12_school_class.webp';
import cohortImg2 from '../images/student_presentation_3.webp';
import cohortImg3 from '../images/student_prize_showcase.jpg';
import cohortImg4 from '../images/running_session_2.png';

const Home: React.FC = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const { hasPlayedThisSession, setIntroComplete, setShowUserTypeDropdown, markAsPlayed } = useIntroAnimation();
  const navigate = useNavigate();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Redirect authenticated users to their dashboard
  useEffect(() => {
    if (!isLoading && isAuthenticated && user) {
      const dashboardRoute = getRoleDefaultRoute(user.roles || []);
      navigate(dashboardRoute, { replace: true });
    }
  }, [isAuthenticated, isLoading, user, navigate]);

  const handleIntroAnimationComplete = () => {
    setIntroComplete(true);
    setShowUserTypeDropdown(true);
    // Mark as played in sessionStorage (only runs once per session)
    if (!hasPlayedThisSession) {
      markAsPlayed();
    }
  };

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  // Content sections data
  const sections = [
    {
      heading: 'Every Student Matters',
      content: 'Creativity Indexing is done to understand students unique learning styles by creating personas. For continuous evaluation Formative Assessments are conducted. Our personalized learning paths ensure that every student work on their weaknesses even though they have different learning speeds.',
      images: [studentImg1, studentImg2, studentImg3],
      imagePosition: 'left' as const,
      backgroundColor: 'bg-gradient-to-br from-primary-50 to-secondary-50'
    },
    {
      heading: 'Teaching backed by Research',
      content: (
        <>
          The curriculum include best practices collected from multiple research studies and education policies like{' '}
          <a href="https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-semibold">
            NEP 2020
          </a>
          ,{' '}
          <a href="https://www.education.gov.in/sites/upload_files/mhrd/files/infocus_slider/NCF-School-Education-Pre-Draft.pdf" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-semibold">
            NCF 2023
          </a>
          ,{' '}
          <a href="https://www.oecd.org/en/data/tools/oecd-learning-compass-2030.html" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-semibold">
            OECD Learning compass 2030
          </a>
          ,{' '}
          <a href="https://pz.harvard.edu/who-we-are/about" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-semibold">
            Project zero
          </a>
          {' '}etc. Teachers are trained in pedagogical excellence to implement the curriculum effectively. Focus is on conceptual clarity and application of knowledge through hands-on activities, projects, and real-world problem solving.
        </>
      ),
      images: [
        { src: researchImg1, link: 'https://pz.harvard.edu/who-we-are/about', alt: 'Harvard Project Zero' },
        { src: researchImg2, link: 'https://www.education.gov.in/sites/upload_files/mhrd/files/infocus_slider/NCF-School-Education-Pre-Draft.pdf', alt: 'NCF 2023' },
        { src: researchImg3, link: 'https://www.oecd.org/en/data/tools/oecd-learning-compass-2030.html', alt: 'OECD Learning Compass 2030' },
        researchImg4
      ],
      imagePosition: 'right' as const,
      backgroundColor: 'bg-gradient-to-br from-secondary-50 to-accent-50'
    },
    {
      heading: 'Session Design for Impact',
      content: (
        <>
          Sessions are designed to include multiple critical parameters for a holistic learning experience. Session includes interactive elements for each persona of students, session include parameters to make formative assessment easy for teachers. include scaffolding for all level of students. using researches like{' '}
          <a href="https://en.wikipedia.org/wiki/Bloom%27s_taxonomy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-semibold">
            Bloom's Taxonomy
          </a>
          ,{' '}
          <a href="https://en.wikipedia.org/wiki/Holland_Codes" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-semibold">
            RIASEC model
          </a>
          {' '}etc
        </>
      ),
      images: [
        { src: sessionImg1, link: 'https://en.wikipedia.org/wiki/Bloom%27s_taxonomy', alt: "Bloom's Taxonomy" },
        { src: sessionImg2, link: 'https://en.wikipedia.org/wiki/Holland_Codes', alt: 'RIASEC Holland Codes' },
        sessionImg3,
        sessionImg4
      ],
      imagePosition: 'left' as const,
      backgroundColor: 'bg-gradient-to-br from-accent-50 to-primary-50'
    },
    {
      heading: 'Super 10 cohorts of Students  ',
      content: 'Practically serving all feature mentioned above are only possible for Maximum 10 students which is golder number for effective learning in a cohort. this ensures that each student receives personalized attention and support from teachers, leading to better learning outcomes and overall development.',
      images: [cohortImg1, cohortImg2, cohortImg3, cohortImg4],
      imagePosition: 'right' as const,
      backgroundColor: 'bg-gradient-to-br from-primary-50 to-accent-50'
    }
  ];

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory"
    >
      {/* Section 1: Animated Intro - Always visible, animation runs once per session */}
      <AnimatedIntro
        onAnimationComplete={handleIntroAnimationComplete}
        skipAnimation={hasPlayedThisSession}
      />

      {/* Sections 2-5: Content Sections */}
      {sections.map((section, index) => (
        <FullScreenSection
          key={index}
          heading={section.heading}
          content={section.content}
          images={section.images}
          imagePosition={section.imagePosition}
          backgroundColor={section.backgroundColor}
        />
      ))}
    </div>
  );
};

export default Home;
