import httpStatus from 'http-status-codes';
import { sendEmail } from '../third-party/nodemailer';
import { NextFunction, Request, Response } from 'express';

const sendEmailService = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  if (!email) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: 'Email is required' });
  }
  try {
    sendEmail(email);
    res.status(httpStatus.OK).json({ message: 'Email sent successfully' });
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: 'Error sending email' });
  }
};

export { sendEmailService };
