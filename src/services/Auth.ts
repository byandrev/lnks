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
  const data = (await response.json()) as ResponseAPI;

  if (!data.error) {
    return data;
  } else {
    throw new Error(data.error || "Error");
  }
}

async function register(
  email: string,
  name: string,
  password: string
): Promise<ResponseAPI> {
  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username: name, password }),
  });
  const data = (await response.json()) as ResponseAPI;

  if (!data.error) {
    return data;
  } else {
    throw new Error(data.error || "Error");
  }
}

async function getUserData(token: string): Promise<ResponseAPI> {
  const response = await fetch(`${API_URL}/login/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = (await response.json()) as ResponseAPI;

  if (!data.error) {
    return data;
  } else {
    throw new Error(data.error || "Error get user");
  }
}

export { login, register, getUserData };
