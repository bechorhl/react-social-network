import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '8ae966ba-5a2a-486b-bd6d-563c2c4f9043',
  },
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const response = await instance.get(
      `users?page=${currentPage}&count=${pageSize}`
    );
    return response.data;
  },

  async follow(id) {
    const response = await instance.post(`follow/${id}`);
    return response.data;
  },

  async unfollow(id) {
    const response = await instance.delete(`follow/${id}`);
    return response.data;
  },
};

export const authAPI = {
  async me() {
    return await instance.get('auth/me');
  },
};

export const profileAPI = {
  async getProfile(userId) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },

  async getStatus(userId) {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },

  async updateStatus(status) {
    const response = await instance.get(`profile/status`, { status: status });
    return response.data;
  },
};
