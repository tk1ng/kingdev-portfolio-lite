require('dotenv').config();
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const MG_KEY = process.env.MG_API_KEY;
const MG_DOMAIN = process.env.MG_DOMAIN;
const TO_EMAIL = process.env.TO_EMAIL;

console.log(MG_KEY, MG_DOMAIN)

const auth = {
    auth: {
        api_key: MG_KEY,
        domain: MG_DOMAIN,
    }
};

const transporter = nodemailer.createTransport(mailgun(auth));

const sendEmail = async (formData) => {
    const { name, email, message } = formData;
    const emailData = {
        from: email,
        to: TO_EMAIL,
        text: message,
        subject: `${name} sent a message from tarynking.dev!`
    }

    transporter.sendMail(emailData);
};

module.exports = sendEmail;