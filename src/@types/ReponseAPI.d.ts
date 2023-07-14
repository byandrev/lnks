export default interface ResponseAPI {
  body: { [key: string]: unknown } | null;
  error: string | null;
  msg: string | null;
  status: number;
}
