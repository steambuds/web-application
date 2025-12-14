/**
 * Group Types for Teacher Groups & Attendance Management
 *
 * Type definitions for groups, students, and attendance records
 * Used with backend API endpoints for attendance tracking
 */

/**
 * Group information
 * Represents a class/batch assigned to a teacher
 */
export interface Group {
  id: string;
  name: string;
  about: string;
  grades: string;
  same_school: boolean;
  created_at: string;
  updated_at: string;
}

/**
 * Basic student information
 */
export interface Student {
  user_id: string;
  steamer_id: number;
  name: string;
}

/**
 * Aggregate attendance statistics for a student
 */
export interface StudentAttendanceStats {
  present: number;
  absent: number;
  late: number;
  excused: number;
}

/**
 * Complete student attendance record including stats and history
 */
export interface StudentAttendanceRecord extends Student {
  stats: StudentAttendanceStats;
  calendar: {
    [date: string]: AttendanceStatus; // Format: "YYYY-MM-DD": "present" | "absent" | "late" | "excused"
  };
}

/**
 * Valid attendance status values
 */
export type AttendanceStatus = 'present' | 'absent' | 'late' | 'excused';

/**
 * Single attendance record for a student
 */
export interface AttendanceMarkRequest {
  user_id: string;
  status: AttendanceStatus;
}

/**
 * Bulk attendance submission payload
 */
export interface BulkAttendanceRequest {
  date: string; // ISO date string (YYYY-MM-DDTHH:mm:ssZ)
  attendances: AttendanceMarkRequest[];
}
