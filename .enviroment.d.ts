export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      TOKEN_AUTH: string;
      TOKEN_ALPHA_VANTAGE: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
