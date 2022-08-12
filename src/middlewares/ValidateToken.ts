import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ValidateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      message: 'Token not found!',
    });
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(
      token,
      '8276184d16d361b3e60cf2071af9e40b'
    ) as IPayload;

    req.token = sub;

    return next();
  } catch {
    return res.status(401).json({
      message: 'Invalid Token',
    });
  }
}
