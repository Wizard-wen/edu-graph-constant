/**
 * @author wizard.song
 * @date
 */

import { createTransport } from 'nodemailer';
import type { Transporter } from 'nodemailer';

export const mailerInstance: Transporter = createTransport({
  host: `${process.env.MAIL_SMTP_HOST}`,
  port: parseInt(`${process.env.MAIL_SMTP_PORT}`, 10),
  secure: true,
  auth: {
    user: `${process.env.MAIL_AUTH_USER}`,
    pass: `${process.env.MAIL_AUTH_PASS}`,
  },
});
