declare namespace Express {
  export interface Request {
    token: string;
  }

  export interface Response {
    user: any;
  }
}
