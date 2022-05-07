import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1433285e225c5d",
    pass: "fc9a03b13cb876"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
    const { body, subject } = data

    await transport.sendMail({
      from: 'Equipe Feedget <hello@feedget.com>',
      to: 'DestroyeerU <destroyeeru18@gmail.com>',
      subject,
      html: body
    })
  }
}
