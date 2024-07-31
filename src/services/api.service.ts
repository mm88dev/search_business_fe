import axios, { AxiosError } from 'axios';
import { Business } from '../types';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});

const handleApiError = (error: AxiosError) => {
  if (error.response) {
    // Server responded with a status other than 2xx
    console.error('API error response:', error.response);
    throw new Error(
      'An error occurred while processing your request. Please try again later.'
    );
  } else if (error.request) {
    // No response received
    console.error('API error request:', error.request);
    throw new Error(
      'No response from the server. Please check your connection and try again.'
    );
  } else {
    // Other errors
    console.error('API error message:', error.message);
    throw new Error('An unexpected error occurred. Please try again later.');
  }
};

export const searchBusiness = async (term: string) => {
  try {
    const response = await api.get<{
      data: Pick<Business, 'id' | 'name' | 'address'>[];
    }>('/businesses/search', {
      params: {
        q: term
      }
    });
    return response.data.data;
  } catch (error) {
    handleApiError(error as AxiosError);
  }
};

export const getBusiness = async (id: string) => {
  try {
    const response = await api.get<{ data: Business }>(`/businesses/${id}`);
    return response.data.data;
  } catch (error) {
    handleApiError(error as AxiosError);
  }
};
