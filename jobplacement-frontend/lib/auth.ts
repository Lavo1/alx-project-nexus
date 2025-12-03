// lib/auth.ts
import { apiPost } from "./api";

export type TokenResponse = {
  access: string;
  refresh: string;
};

export async function login(usernameOrEmail: string, password: string) {
  // Django SimpleJWT token endpoint typically expects username & password (or email)
  const res = await apiPost<TokenResponse>("/api/auth/login/", {
    username: usernameOrEmail,
    password,
  });

  if (!res.ok) throw res.error || new Error("Login failed");

  // store tokens in localStorage for the client
  if (res.data?.access) {
    localStorage.setItem("access", res.data.access);
  }
  if (res.data?.refresh) {
    localStorage.setItem("refresh", res.data.refresh);
  }

  return res.data;
}

export function logout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
}
