export interface HealthResponse {
  status: "ok";
  service: "lingo-api";
}

const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:3000/api/v1";

export async function getHealth(): Promise<HealthResponse> {
  const response = await fetch(`${apiUrl}/health`);

  if (!response.ok) {
    throw new Error(`Health check failed with status ${response.status}`);
  }

  const data: unknown = await response.json();

  if (
    typeof data !== "object" ||
    data === null ||
    !("status" in data) ||
    data.status !== "ok" ||
    !("service" in data) ||
    data.service !== "lingo-api"
  ) {
    throw new Error("Health check returned an invalid response");
  }

  return data as HealthResponse;
}
