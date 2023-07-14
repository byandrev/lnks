import { API_URL } from "../config";

async function login(email: string, password: string): Promise<any> {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error("Bad credentials");
  }
}

async function register(
  email: string,
  name: string,
  password: string
): Promise<any> {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name, password }),
  });
  const data = response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error("Sign up failed");
  }
}

export { login, register };
