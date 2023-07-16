import ResponseAPI from "../@types/ReponseAPI";
import { API_URL } from "../config";

async function login(email: string, password: string): Promise<ResponseAPI> {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `username=${email}&password=${password}`,
  });
  const data = response.json();

  if (response.ok) {
    return data as Promise<ResponseAPI>;
  } else {
    throw new Error("Bad credentials");
  }
}

async function register(
  email: string,
  name: string,
  password: string
): Promise<ResponseAPI> {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name, password }),
  });
  const data = response.json();

  if (response.ok) {
    return data as Promise<ResponseAPI>;
  } else {
    throw new Error("Sign up failed");
  }
}

export { login, register };
