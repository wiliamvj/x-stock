import { Request, Response } from 'express';
import 'express-async-errors';
import { sign } from 'jsonwebtoken';

class CreateTokenController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    if (!name || !email) {
      throw new Error('name or email not found!');
    }

    const token = sign({ email }, process.env.TOKEN_AUTH || '', {
      subject: name,
      expiresIn: '50d',
    });

    return res.json({ token: token });
  }
}

export { CreateTokenController };
