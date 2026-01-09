import { HttpOptions } from "./http.types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

function buildQuery(params?: HttpOptions["params"]) {
  if (!params) return "";
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      query.append(key, String(value));
    }
  });

  return `?${query.toString()}`;
}

export const httpClient = {
  async request<TResponse, TBody = unknown>(
    url: string,
    options: HttpOptions<TBody> = {}
  ): Promise<TResponse> {
    const {
      method = "GET",
      body,
      headers,
      params,
      cache,
      next,
      credentials,
      signal,
    } = options;

    const response = await fetch(`${BASE_URL}${url}${buildQuery(params)}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      cache,
      next,
      credentials,
      signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    return response.json();
  },

  get<T>(url: string, options?: HttpOptions) {
    return this.request<T>(url, { ...options, method: "GET" });
  },

  post<T, B>(url: string, body: B, options?: HttpOptions<B>) {
    return this.request<T, B>(url, {
      ...options,
      method: "POST",
      body,
    });
  },

  patch<T, B>(url: string, body?: B, options?: HttpOptions<B>) {
    return this.request<T, B>(url, {
      ...options,
      method: "PATCH",
      body,
    });
  },

  delete<T>(url: string, options?: HttpOptions) {
    return this.request<T>(url, { ...options, method: "DELETE" });
  },
};
