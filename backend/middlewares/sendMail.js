import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendMail = async (message) => {
  const { ADMIN_MAIL, ADMIN_PASS } = process.env;
  console.log(ADMIN_MAIL);

  let transporter = createTransport({
    service: "gmail",
    auth: {
      user: ADMIN_MAIL,
      pass: ADMIN_PASS,
    },
  });

  await transporter.sendMail({
    subject: "Contact from Portfolio",
    to: ADMIN_MAIL,
    from: ADMIN_MAIL,
    message,
  });
};
