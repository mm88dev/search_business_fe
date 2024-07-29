import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export const searchBusiness = async (term: string) => {
  const response = await api.get('/businesses', {
    params: {
      q: term
    }
  });

  return response.data;
};

export const getBusiness = async (
  id: string
): Promise<
  {
    id: string;
    name: string;
    address: string;
    website: string;
    phone: string;
    openingHours: {
      [key: string]: string[];
    }[];
  }[]
> => {
  const response = await api.get(`/businesses/${id}`);
  return response.data;
};
