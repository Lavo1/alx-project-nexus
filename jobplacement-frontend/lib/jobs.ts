import { apiFetch } from "./api";

export function getJobs() {
  return apiFetch("/api/jobs/");
}
