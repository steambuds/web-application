import env from './env';

// Ensure base URL doesn't have a trailing slash for consistency
const BASE_URL = env.apiUrl.replace(/\/$/, '');

export const endpoints = {
  AUTH: {
    LOGIN: `${BASE_URL}/api/login`,
    SIGNUP: `${BASE_URL}/api/user`,
    LOGOUT: `${BASE_URL}/api/logout`,
    REFRESH: `${BASE_URL}/api/refresh`,
  },
  USERS: {
    LIST: `${BASE_URL}/api/users`,
    GET: (id: string) => `${BASE_URL}/api/users/${id}`,
    ROLES: (id: string) => `${BASE_URL}/api/users/${id}/roles`,
    ROLE_REMOVE: (id: string, role: string) => `${BASE_URL}/api/users/${id}/roles/${role}`,
  },
  PROFILES: {
    LIST: `${BASE_URL}/api/profiles`,
    GET: (id: string) => `${BASE_URL}/api/profiles/${id}`,
    CREATE: `${BASE_URL}/api/profiles`,
    UPDATE: (id: string) => `${BASE_URL}/api/profiles/${id}`,
    DELETE: (id: string) => `${BASE_URL}/api/profiles/${id}`,
  },
  GROUPS: {
    LIST: `${BASE_URL}/api/groups`,
    ATTENDANCE: (groupId: string) => `${BASE_URL}/api/groups/${groupId}/attendances`,
  },
  HELLO: {
    LIST: `${BASE_URL}/api/hello`,
    CREATE: `${BASE_URL}/api/hello`,
    DELETE: (id: string) => `${BASE_URL}/api/hello/${id}`,
  },
  TRACK_VISIT: `${BASE_URL}/api/track_visit`,
};

export default endpoints;
