import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

dotenv.config();

if (process.env.SENDGRIDKEY) {
  sgMail.setApiKey(process.env.SENDGRIDKEY);
}

export default function (req:NextApiRequest, res:NextApiResponse) {
  const mailOptions = {
    to: 'marcelusmedius@gmail.com',
    from: `contact@${process.env.DOMAIN}`,
    subject: `Contact on ${process.env.DOMAIN}`,

    html: `<strong>Contact on ${process.env.DOMAIN}</strong><BR>
    ${req.body}<BR>`,

  };
  sgMail
    .send(mailOptions)
    .then(() => {
      res.status(200);
      res.end();
    })
    .catch(() => {
      res.status(500);
      res.end();
    });
}
