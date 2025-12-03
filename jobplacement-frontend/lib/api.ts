export type APIResponse<T> = {
  ok: boolean;
  status: number;
  data?: T;
  error?: any;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export async function apiFetch<T = any>(
  path: string,
  opts: RequestInit = {}
): Promise<APIResponse<T>> {
  const url = `${API_URL}${path}`;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(opts.headers || {}),
  };

  // attach access token if present
  const token = typeof window !== "undefined" ? localStorage.getItem("access") : null;
  if (token) (headers as any).Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(url, { ...opts, headers });
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) return { ok: false, status: res.status, error: data || res.statusText };
    return { ok: true, status: res.status, data };
  } catch (err) {
    return { ok: false, status: 0, error: err };
  }
}

export async function apiGet<T = any>(path: string) {
  return apiFetch<T>(path, { method: "GET" });
}

export async function apiPost<T = any>(path: string, body?: any) {
  return apiFetch<T>(path, {
    method: "POST",
    body: body ? JSON.stringify(body) : undefined,
  });
}
