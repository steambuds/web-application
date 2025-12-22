import React from 'react';
import { StudentAttendanceRecord } from '../../types/groups';

/**
 * AttendanceCalendarView Component
 *
 * Displays a compact table view of historical attendance for all students
 * Shows attendance history with week/month separators and aggregate stats
 *
 * @example
 * ```tsx
 * <AttendanceCalendarView students={studentAttendanceRecords} />
 * ```
 */

interface AttendanceCalendarViewProps {
  /** Array of student attendance records with calendar data */
  students: StudentAttendanceRecord[];
}

interface DateGroup {
  label: string;
  dates: string[];
}

const AttendanceCalendarView: React.FC<AttendanceCalendarViewProps> = ({ students }) => {
  // Get all unique dates from all students' calendars
  const allDates = new Set<string>();
  students.forEach(student => {
    Object.keys(student.calendar).forEach(date => allDates.add(date));
  });

  // Sort all dates (newest first) - show ALL dates, no limit
  const sortedDates = Array.from(allDates).sort().reverse();

  // Group dates by week/month
  const dateGroups: DateGroup[] = React.useMemo(() => {
    const groups: DateGroup[] = [];
    let currentGroup: DateGroup | null = null;
    let currentWeekStart: Date | null = null;

    sortedDates.forEach(dateStr => {
      const date = new Date(dateStr);
      const weekStart = new Date(date);
      weekStart.setDate(date.getDate() - date.getDay());

      // Create new group for each week
      if (!currentGroup || !currentWeekStart || currentWeekStart.getTime() !== weekStart.getTime()) {
        // Calculate week end (6 days after start)
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);

        const startDay = weekStart.getDate();
        const endDay = weekEnd.getDate();
        const month = weekEnd.toLocaleDateString('en-IN', { month: 'short' });
        const year = weekEnd.getFullYear();

        const weekLabel = `${startDay} - ${endDay} ${month} ${year}`;

        currentGroup = { label: weekLabel, dates: [dateStr] };
        currentWeekStart = weekStart;
        groups.push(currentGroup);
      } else {
        currentGroup.dates.push(dateStr);
      }
    });

    return groups;
  }, [sortedDates]);

  if (sortedDates.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <p className="text-gray-500 text-sm">No attendance records yet</p>
      </div>
    );
  }

  // Status color mapping for compact view
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-green-600';
      case 'absent': return 'bg-red-600';
      case 'late': return 'bg-yellow-600';
      case 'excused': return 'bg-blue-600';
      default: return 'bg-gray-300';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'present': return 'P';
      case 'absent': return 'A';
      case 'late': return 'L';
      case 'excused': return 'E';
      default: return '-';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div
        className="relative"
        style={{ maxHeight: '500px', overflowY: 'auto', overflowX: 'auto' }}
      >
        <table className="text-left border-collapse text-sm" style={{ minWidth: '100%', width: 'max-content' }}>
          <thead className="sticky top-0 bg-white z-20">
            {/* Week labels row */}
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="py-2 px-3 sticky left-0 bg-gray-100 z-30 border-b border-gray-300 border-r border-gray-300 min-w-[120px]">Student</th>
              <th className="py-2 px-3 bg-gray-100 border-b border-gray-300 border-r-2 border-gray-400 sticky left-[120px] z-30 min-w-[100px]">Stats</th>
              {dateGroups.map((group, groupIdx) => (
                <th
                  key={groupIdx}
                  colSpan={group.dates.length}
                  className="py-2 px-2 text-xs text-gray-700 font-semibold text-center border-l-2 border-gray-400 border-b border-gray-300"
                >
                  {group.label}
                </th>
              ))}
            </tr>
            {/* Date headers row (only day) */}
            <tr className="bg-gray-50 border-b-2 border-gray-300">
              <th className="py-2 px-3 text-gray-700 font-semibold sticky left-0 bg-gray-50 z-30 min-w-[120px] border-r border-gray-300"></th>
              <th className="py-2 px-3 text-gray-700 font-semibold text-center bg-gray-50 sticky left-[120px] z-30 min-w-[100px] border-r-2 border-gray-400"></th>
              {dateGroups.map((group, groupIdx) => (
                <React.Fragment key={groupIdx}>
                  {group.dates.map((date, dateIdx) => (
                    <th
                      key={date}
                      className={`py-2 px-2 text-gray-700 text-center font-medium min-w-[40px] ${
                        dateIdx === 0 ? 'border-l-2 border-gray-400' : ''
                      }`}
                    >
                      <div className="text-xs">
                        {new Date(date).getDate()}
                      </div>
                    </th>
                  ))}
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student, studentIdx) => (
              <tr key={student.user_id} className={`border-b border-gray-100 hover:bg-gray-50 ${studentIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                <td className={`py-2 px-3 sticky left-0 z-10 min-w-[120px] border-r border-gray-300 ${studentIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div>
                    <p className="font-medium text-gray-800 text-xs">{student.name}</p>
                    <p className="text-xs text-gray-500">ID: {student.steamer_id}</p>
                  </div>
                </td>
                <td className={`py-2 px-3 border-r-2 border-gray-400 sticky left-[120px] z-10 min-w-[100px] ${studentIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="grid grid-cols-4 gap-1 text-center text-xs">
                    <div>
                      <p className="text-green-600 font-semibold">{student.stats.present}</p>
                      <p className="text-gray-500 text-[10px]">P</p>
                    </div>
                    <div>
                      <p className="text-red-600 font-semibold">{student.stats.absent}</p>
                      <p className="text-gray-500 text-[10px]">A</p>
                    </div>
                    <div>
                      <p className="text-yellow-600 font-semibold">{student.stats.late}</p>
                      <p className="text-gray-500 text-[10px]">L</p>
                    </div>
                    <div>
                      <p className="text-blue-600 font-semibold">{student.stats.excused}</p>
                      <p className="text-gray-500 text-[10px]">E</p>
                    </div>
                  </div>
                </td>
                {dateGroups.map((group, groupIdx) => (
                  <React.Fragment key={groupIdx}>
                    {group.dates.map((date, dateIdx) => (
                      <td
                        key={date}
                        className={`py-2 px-2 text-center ${
                          dateIdx === 0 ? 'border-l-2 border-gray-400' : ''
                        }`}
                      >
                        {student.calendar[date] ? (
                          <div
                            className={`w-7 h-7 rounded flex items-center justify-center text-white text-xs font-semibold mx-auto ${getStatusColor(student.calendar[date])}`}
                            title={student.calendar[date]}
                          >
                            {getStatusLabel(student.calendar[date])}
                          </div>
                        ) : (
                          <span className="text-gray-300 text-xs">-</span>
                        )}
                      </td>
                    ))}
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceCalendarView;
