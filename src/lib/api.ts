import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Inquiry {
  id: string;
  _id?: string;
  name: string;
  phone: string;
  location?: string;
  message?: string;
  product?: string;
  type?: string;
  status: 'Pending' | 'Contacted' | 'Completed' | 'Archived';
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}

// Submit Inquiry -> Strictly saved to MongoDB database via Express API
export async function submitInquiry(data: {
  name: string;
  phone: string;
  location?: string;
  message?: string;
  product?: string;
  type?: string;
}) {
  const response = await api.post('/inquiries', data);
  return response.data;
}

// Admin Login
export async function adminLogin(credentials: { username: string; password: string }) {
  try {
    const response = await api.post('/admin/login', credentials);
    return response.data;
  } catch (err: any) {
    const message = err.response?.data?.message || 'Login failed';
    throw new Error(message);
  }
}

// Get All Inquiries -> Strictly fetched from MongoDB database
export async function getInquiries(token: string, search?: string, status?: string) {
  const response = await api.get('/inquiries', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      search,
      status,
    },
  });

  return response.data;
}

// Update Inquiry Status in MongoDB
export async function updateInquiryStatus(token: string, id: string, status: string) {
  const response = await api.patch(
    `/inquiries/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

// Delete Inquiry from MongoDB
export async function deleteInquiry(token: string, id: string) {
  const response = await api.delete(`/inquiries/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
