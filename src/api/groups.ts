/**
 * Groups API
 *
 * API service layer for teacher groups and attendance management
 * Follows patterns from auth.ts for consistency
 */

import { endpoints } from '../config/endpoints';
import { Group, StudentAttendanceRecord, BulkAttendanceRequest } from '../types/groups';

/**
 * API Error response interface
 */
interface APIError {
  error: string;
  details?: string[];
}

/**
 * Custom error class for Groups API errors
 * Provides structured error handling with HTTP status codes
 */
export class GroupsAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public details?: string[]
  ) {
    super(message);
    this.name = 'GroupsAPIError';
  }
}

/**
 * Helper function to handle API responses
 * Reuses the pattern from auth.ts for consistency
 *
 * @template T - The expected response type
 * @param response - Fetch API response object
 * @returns Parsed JSON response
 * @throws {GroupsAPIError} On error responses
 */
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    let errorMessage = 'An error occurred';
    let details: string[] | undefined;

    try {
      const errorData: APIError = await response.json();
      errorMessage = errorData.error || errorMessage;
      details = errorData.details;
    } catch {
      // If response is not JSON, use status text
      errorMessage = response.statusText || errorMessage;
    }

    throw new GroupsAPIError(errorMessage, response.status, details);
  }

  // Handle 204 No Content
  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
};

/**
 * Get teacher's assigned groups
 * Requires instructor or facilitator role
 *
 * @param accessToken - JWT access token
 * @returns Array of groups where user is instructor/facilitator
 * @throws {GroupsAPIError} On API errors
 */
export const getTeacherGroups = async (
  accessToken: string
): Promise<Group[]> => {
  const response = await fetch(endpoints.GROUPS.LIST, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<Group[]>(response);
};

/**
 * Get attendance dashboard for a specific group
 * Returns students list with attendance stats and calendar
 *
 * @param groupId - Group ID
 * @param accessToken - JWT access token
 * @returns Array of student attendance records
 * @throws {GroupsAPIError} On API errors (403 if not authorized for group, 404 if group not found)
 */
export const getGroupAttendance = async (
  groupId: string,
  accessToken: string
): Promise<StudentAttendanceRecord[]> => {
  const response = await fetch(endpoints.GROUPS.ATTENDANCE(groupId), {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<StudentAttendanceRecord[]>(response);
};

/**
 * Record or update attendance for a group (bulk operation)
 * If attendance already exists for a student on the given date, it will be updated
 *
 * @param groupId - Group ID
 * @param attendanceData - Bulk attendance data with date and student statuses
 * @param accessToken - JWT access token
 * @returns Void on success
 * @throws {GroupsAPIError} On API errors (validation errors, unauthorized, etc.)
 */
export const recordGroupAttendance = async (
  groupId: string,
  attendanceData: BulkAttendanceRequest,
  accessToken: string
): Promise<void> => {
  const response = await fetch(endpoints.GROUPS.ATTENDANCE(groupId), {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(attendanceData),
  });

  return handleResponse<void>(response);
};