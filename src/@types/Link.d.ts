import { SetStateAction } from "react";
import User from "./User";

export default interface Link {
  id: string;
  name: string;
  url: string;
  tags: string[];
  user?: User;
}

export interface LinkDTO {
  name: string;
  url: string;
  tags: string[];
}

export interface LinksContextType {
  links: Link[] | null;
  setLinks: (links: Link[]) => void;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}
