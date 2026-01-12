/**
 * Barrel export for dashboard components
 * Unified dashboard system exports
 */
export { default as UnifiedDashboard } from './UnifiedDashboard';
export { default as UnifiedResources } from './UnifiedResources';
export { default as UnifiedActivities } from './UnifiedActivities';

// Keep admin dashboard separate (unique tab-based interface)
export { default as AdminDashboard } from './AdminDashboard';

// Keep attendance page separate (teacher-specific feature)
export { default as GroupAttendancePage } from './GroupAttendancePage';
