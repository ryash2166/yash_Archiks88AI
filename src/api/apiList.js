const API_LIST = import.meta.env.VITE_BACKEND_URL;

export const apiList = {
  checkAuthStatus: `${API_LIST}/api/profile`,
  login: `${API_LIST}/auth/login`,
  signup: `${API_LIST}/auth/signup`,
  requestPasswordReset: `${API_LIST}/auth/check-email`,
  resetPassword: `${API_LIST}/auth/reset-password`,
  media: `${API_LIST}/api/explore/media`,
  fetchProfile: `${API_LIST}/api/profile`,
  updateProfile: `${API_LIST}/api/profile`,
  deleteImage: `${API_LIST}/api/images/`,
  generateAIImage: `${API_LIST}/api/generate`,
  sendImageRequest: `${API_LIST}/api/generate-image`,
};
