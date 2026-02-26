const API_BASE = 'http://localhost:5000/api';

export const testBackendConnection = async () => {
  try {
    const response = await fetch(`${API_BASE}/test`);
    return await response.json();
  } catch (error) {
    console.error("Backend connection failed:", error);
    return { error: "Connection to backend failed" };
  }
};
