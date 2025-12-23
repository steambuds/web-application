import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import endpoints from '../config/endpoints';


const AnalyticsTracker = () => {
  const location = useLocation();
  const THREE_HOURS_IN_MS = 3 * 60 * 60 * 1000;

  useEffect(() => {
    const trackVisit = async () => {
      const now = Date.now();
      const lastTrackedTime = sessionStorage.getItem('vms_last_track_time');

      // logic: If no time exists OR current time - last time > 3 hours
      const shouldTrack = !lastTrackedTime || (now - parseInt(lastTrackedTime)) > THREE_HOURS_IN_MS;

      if (shouldTrack) {
        try {
          await fetch(endpoints.TRACK_VISIT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          });

          // Save the current timestamp to sessionStorage
          sessionStorage.setItem('vms_last_track_time', now.toString());
          console.log('Visit tracked. Next track allowed in 3 hours.');
        } catch (error) {
          console.error('Tracking failed:', error);
        }
      }
    };

    trackVisit();
    
    // Optional: Set an interval to check while the tab stays open
    const interval = setInterval(trackVisit, 600000); // Check 10 minutes

    return () => clearInterval(interval); // Cleanup on unmount
  }, [location.pathname]);

  return null;
};

export default AnalyticsTracker;