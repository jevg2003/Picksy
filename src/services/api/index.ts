export const API_BASE_URL = "https://picksy-api.vercel.app/api/v1";

export const queryApi = async (url: string, options: RequestInit) => {
  const response = await fetch(`${API_BASE_URL}${url}`, options);

  if (!response.ok) {
    throw new Error(`${response.status} Error: ${response.statusText}`);
  }

  return response.json();
}