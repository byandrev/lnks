export default interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserContextType {
  user?: User | null;
  token?: string | null;
  loading?: boolean;
  error?: string | null;
  login?: (user: UserLogin) => void;
  logout?: () => void;
}
