import { apiPost } from "./api";

export async function apiLogin(email: string, password: string) {
  try {
    return await apiPost("/api/auth/login/", {
      email,
      password,
    });
  } catch (error) {
    return { ok: false };
  }
}
