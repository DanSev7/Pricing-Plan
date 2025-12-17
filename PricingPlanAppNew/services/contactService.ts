import axios, { AxiosError } from 'axios';
import env from '../config/environment';

// Base URL for our backend API
const API_BASE_URL = env.apiUrl;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Submit contact form to the backend
 * @param contactData - Contact information
 * @returns Promise with submission response
 */
export const submitContactForm = async (contactData: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  try {
    const response = await apiClient.post('/contact', contactData);
    
    // Return the response data directly, preserving the structure
    return response.data;
  } catch (error) {
    console.error('Contact form submission error:', error);
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.data) {
        const data = axiosError.response.data as { error?: string };
        throw new Error(data.error || 'Failed to submit contact form');
      }
      // Handle network errors specifically
      if (error.code === 'NETWORK_ERROR') {
        throw new Error('Unable to connect to server. Please check your network connection.');
      }
    }
    throw new Error('An unexpected error occurred');
  }
};

/**
 * Submit team contact form to the backend
 * @param contactData - Contact information including recipient
 * @returns Promise with submission response
 */
export const submitTeamContactForm = async (contactData: {
  name: string;
  email: string;
  subject: string;
  message: string;
  recipientEmail: string;
  recipientName: string;
}) => {
  try {
    const response = await apiClient.post('/team-contact', contactData);
    
    // Return the response data directly, preserving the structure
    return response.data;
  } catch (error) {
    console.error('Team contact form submission error:', error);
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.data) {
        const data = axiosError.response.data as { error?: string };
        throw new Error(data.error || 'Failed to submit team contact form');
      }
      // Handle network errors specifically
      if (error.code === 'NETWORK_ERROR') {
        throw new Error('Unable to connect to server. Please check your network connection.');
      }
    }
    throw new Error('An unexpected error occurred');
  }
};

export default {
  submitContactForm,
  submitTeamContactForm,
};