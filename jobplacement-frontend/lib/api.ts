export async function apiPost(path: string, body: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return { ok: res.ok, data: await res.json().catch(() => null) };
}

export async function apiGet(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`);

  return { ok: res.ok, data: await res.json().catch(() => null) };
}
