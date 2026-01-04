import React, { useState, useEffect, useRef } from 'react';
import { useHeaderAction } from '../context/HeaderActionContext';
import { getNavLinkClassName } from '../utils/helpers';
import StudentResources, { StudentResourcesRef } from './dashboards/StudentResources';
import StudentActivities, { StudentActivitiesRef } from './dashboards/StudentActivities';

type ViewType = 'resources' | 'activities';

/**
 * Student Public Page
 * Public-facing student page with restricted access to resources and activities
 * Navigation: Shows Home, About Us, Contact + alternate view button (Resources OR Activities)
 * Hamburger menu: Opens resource/article selector (handled by child components)
 */
const Student: React.FC = () => {
  const [view, setView] = useState<ViewType>('resources');
  const { setCustomNavLinks, setMobileAction } = useHeaderAction();
  const resourcesRef = useRef<StudentResourcesRef>(null);
  const activitiesRef = useRef<StudentActivitiesRef>(null);

  // Set hamburger action to open the appropriate selector
  const handleMenuOpen = () => {
    if (view === 'resources' && resourcesRef.current) {
      resourcesRef.current.openMobileMenu();
    } else if (view === 'activities' && activitiesRef.current) {
      activitiesRef.current.openMobileMenu();
    }
  };

  // Inject alternate view button into header (shows Resources OR Activities, whichever is NOT active)
  useEffect(() => {
    // Show the alternate view button (text-only for consistency with other public pages)
    if (view === 'resources') {
      // Currently on Resources, show Activities button
      setCustomNavLinks(
        <button
          onClick={() => setView('activities')}
          className={getNavLinkClassName(false)}
        >
          Activities
        </button>
      );
    } else {
      // Currently on Activities, show Resources button
      setCustomNavLinks(
        <button
          onClick={() => setView('resources')}
          className={getNavLinkClassName(false)}
        >
          Resources
        </button>
      );
    }

    // Set mobile action for hamburger menu
    setMobileAction(() => handleMenuOpen);

    return () => {
      setCustomNavLinks(null);
      setMobileAction(null);
    };
  }, [view, setCustomNavLinks, setMobileAction]);

  return (
    <div className="h-full w-full bg-white">
      {view === 'resources' ? (
        <StudentResources ref={resourcesRef} isPublic={true} />
      ) : (
        <StudentActivities ref={activitiesRef} isPublic={true} />
      )}
    </div>
  );
};

export default Student;