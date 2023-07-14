import ResponseAPI from "../@types/ReponseAPI";
import { API_URL } from "../config";

async function login(email: string, password: string): Promise<ResponseAPI> {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = response.json();

    if (response.ok) {
      return data as Promise<ResponseAPI>;
    } else {
      throw new Error("Bad credentials");
    }
  } catch (error) {
    throw new Error("Bad newtwork error");
  }
}

async function register(
  email: string,
  name: string,
  password: string
): Promise<ResponseAPI> {
  try {
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
  } catch (error) {
    throw new Error("Bad newtwork error");
  }
}

export { login, register };
