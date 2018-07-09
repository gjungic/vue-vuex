import http from './axios';

export const fetchUsers = () => {
  return http.get('users');
};
