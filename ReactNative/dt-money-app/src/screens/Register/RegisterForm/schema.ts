import * as you from 'yup';

export const registerFormSchema = you.object({
  name: you.string().required('Name is required'),
  email: you.string().email('Invalid email format').required('Email is required'),
  password: you.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: you.string().oneOf([you.ref('password'), ""], 'Passwords must match').required('Confirm Password is required'),
});