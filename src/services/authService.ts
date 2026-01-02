// Mock Auth Service for Demonstration
// In a real app, this would communicate with your Backend API

const TOKEN_KEY = "vcard_auth_token";

export const authService = {
  // Simulate Login
  login: () => {
    localStorage.setItem(TOKEN_KEY, "start_demo_token_123"); // FAKE TOKEN
    return true;
  },

  // Simulate Logout
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
  },

  // Check if logged in (Client Side Check)
  isAuthenticated: () => {
    if (typeof window === "undefined") return false; // Server side
    return !!localStorage.getItem(TOKEN_KEY);
  },

  // Get user info (Mock)
  getUser: () => {
    if (!authService.isAuthenticated()) return null;
    return {
      name: "Demo User",
      email: "demo@example.com",
      role: "pro",
    };
  },
};
