import { LinkDTO } from "../@types/Link";
import ResponseAPI from "../@types/ReponseAPI";
import { API_URL } from "../config";

async function getAllLinks(token: string): Promise<ResponseAPI> {
  const response = await fetch(`${API_URL}/links`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = (await response.json()) as ResponseAPI;

  if (!data.error) {
    return data;
  } else {
    throw new Error(data.error || "Error to get links");
  }
}

async function createLink(link: LinkDTO, token: string): Promise<ResponseAPI> {
  const response = await fetch(`${API_URL}/links`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(link),
  });
  const data = (await response.json()) as ResponseAPI;

  if (!data.error) {
    return data;
  } else {
    throw new Error(data.error || "Error to create link");
  }
}

export { getAllLinks, createLink };
