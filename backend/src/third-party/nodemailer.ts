import ejs from 'ejs';
import nodemailer from 'nodemailer';
import path from 'path';
import config from '../config/config';
const { MAIL_ID, MAIL_PASSWORD, MAIL_OWNER } = config.env;

const redirectUrl = 'https://fin-learning.nguyentungson.id.vn/';

const sendEmail = async (email: string) => {
  try {
    const html = await ejs.renderFile(
      path.join(__dirname, '../template/mail-template.ejs'),
      { email, redirectUrl },
      { async: true },
    );
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: MAIL_ID, // generated ethereal user
        pass: MAIL_PASSWORD, // generated ethereal password
      },
    });

    // send mail with defined transport object
    await transporter.sendMail({
      from: MAIL_OWNER, // sender address
      to: email, // list of receivers
      subject: `Khóa học `, // Subject line
      html: html,
      // attachments: data.attachments, // html body
    });
  } catch (error) {
    console.log(error);
  }
};

export { sendEmail };
