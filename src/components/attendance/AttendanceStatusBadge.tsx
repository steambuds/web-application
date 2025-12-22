import React from 'react';
import { Badge } from '../ui';
import { AttendanceStatus } from '../../types/groups';

/**
 * AttendanceStatusBadge Component
 *
 * Displays an attendance status as a colored badge
 * Color-coded based on status type for quick visual identification
 *
 * @example
 * ```tsx
 * <AttendanceStatusBadge status="present" />
 * <AttendanceStatusBadge status="absent" />
 * ```
 */

interface AttendanceStatusBadgeProps {
  /** The attendance status to display */
  status: AttendanceStatus;
}

const AttendanceStatusBadge: React.FC<AttendanceStatusBadgeProps> = ({ status }) => {
  // Map status to badge configuration
  const statusConfig: Record<AttendanceStatus, { label: string; color: 'success' | 'error' | 'warning' | 'primary' }> = {
    present: { label: 'Present', color: 'success' },
    absent: { label: 'Absent', color: 'error' },
    late: { label: 'Late', color: 'warning' },
    excused: { label: 'Excused', color: 'primary' },
  };

  const config = statusConfig[status];

  return (
    <Badge variant="solid" color={config.color}>
      {config.label}
    </Badge>
  );
};

export default AttendanceStatusBadge;
