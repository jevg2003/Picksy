export const API_BASE_URL = "https://picksy-api.vercel.app/api/v1";

export const queryApi = async (url: string, options: RequestInit) => {
  const response = await fetch(`${API_BASE_URL}${url}`, options);
  if (!response.ok) {
    const data = await response.json().catch(() => null);
    const status = data?.status ?? response.status;
    const message = data?.message ?? response.statusText;
    throw new Error(`${status} Error: ${message || "La API de Picksy no respondió correctamente"}`);
  }

  return response.json();
};
