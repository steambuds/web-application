import React from 'react';
import { Check, X, Clock, AlertCircle } from 'lucide-react';
import { AttendanceStatus, StudentAttendanceRecord } from '../../types/groups';
import AttendanceStatusBadge from './AttendanceStatusBadge';

/**
 * StudentAttendanceRow Component
 *
 * Displays a single student's attendance information with:
 * - Student name and ID
 * - Last attendance status
 * - 4 status buttons for quick marking
 *
 * @example
 * ```tsx
 * <StudentAttendanceRow
 *   student={studentRecord}
 *   currentStatus="present"
 *   onStatusChange={(userId, status) => handleChange(userId, status)}
 * />
 * ```
 */

interface StudentAttendanceRowProps {
  /** Student attendance record with stats and history */
  student: StudentAttendanceRecord;
  /** Currently selected status for this student */
  currentStatus: AttendanceStatus | undefined;
  /** Callback when status changes */
  onStatusChange: (userId: string, status: AttendanceStatus) => void;
}

const StudentAttendanceRow: React.FC<StudentAttendanceRowProps> = ({
  student,
  currentStatus,
  onStatusChange,
}) => {
  // Get last attendance status from calendar
  const lastStatus = React.useMemo(() => {
    const dates = Object.keys(student.calendar).sort().reverse();
    return dates.length > 0 ? student.calendar[dates[0]] : null;
  }, [student.calendar]);

  const statusButtons: Array<{
    status: AttendanceStatus;
    icon: React.ReactNode;
    colorClass: string;
    hoverClass: string;
  }> = [
    {
      status: 'present',
      icon: <Check className="w-4 h-4" />,
      colorClass: 'bg-green-600 text-white',
      hoverClass: 'hover:bg-green-700',
    },
    {
      status: 'absent',
      icon: <X className="w-4 h-4" />,
      colorClass: 'bg-red-600 text-white',
      hoverClass: 'hover:bg-red-700',
    },
    {
      status: 'late',
      icon: <Clock className="w-4 h-4" />,
      colorClass: 'bg-yellow-600 text-white',
      hoverClass: 'hover:bg-yellow-700',
    },
    {
      status: 'excused',
      icon: <AlertCircle className="w-4 h-4" />,
      colorClass: 'bg-blue-600 text-white',
      hoverClass: 'hover:bg-blue-700',
    },
  ];

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      {/* Student Info */}
      <td className="py-2 px-2">
        <div>
          <p className="font-medium text-gray-800 text-xs truncate">{student.name}</p>
          <p className="text-[10px] text-gray-500 truncate">ID: {student.steamer_id}</p>
        </div>
      </td>

      {/* Last Status */}
      <td className="py-2 px-1 text-center">
        {lastStatus ? (
          <AttendanceStatusBadge status={lastStatus} />
        ) : (
          <span className="text-xs text-gray-400">-</span>
        )}
      </td>

      {/* Status Buttons */}
      <td className="py-2 px-1">
        <div className="flex gap-0.5 justify-center">
          {statusButtons.map(({ status, icon, colorClass, hoverClass }) => (
            <button
              key={status}
              onClick={() => onStatusChange(student.user_id, status)}
              className={`
                flex items-center justify-center w-8 h-8 rounded transition-all
                ${currentStatus === status ? colorClass : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}
                ${currentStatus === status ? '' : hoverClass}
              `}
              title={status.charAt(0).toUpperCase() + status.slice(1)}
            >
              {icon}
            </button>
          ))}
        </div>
      </td>
    </tr>
  );
};

export default StudentAttendanceRow;
