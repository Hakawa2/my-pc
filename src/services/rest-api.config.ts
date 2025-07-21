type RequestsParams = {
  url: string;
  body?: unknown;
};

export function Requests() {
  const handleResponse = async <T>(response: Response): Promise<T> => {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Erro ${response.status}`);
    }
    return response.json();
  };

  const handleError = (error: unknown) => {
    console.error("Erro na requisição:", error);
    throw error;
  };

  const get = async <T>(data: RequestsParams): Promise<T> => {
    try {
      const response = await fetch(data.url, {
        method: "GET",
      });
      return await handleResponse<T>(response);
    } catch (error) {
      return handleError(error);
    }
  };

  return {
    get,
  };
}
