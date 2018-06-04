import { CREATE_EMPLOYEE } from './types';

export const createEmployee = ({ prop, value }) => {
  return {
      type: CREATE_EMPLOYEE,
      payload: { prop, value }
  };
};
