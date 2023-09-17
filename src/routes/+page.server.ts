import nodemailer from 'nodemailer';
import { EMAIL_SERVER_URL, EMAIL_SERVER_PORT, EMAIL_USER, EMAIL_PASSWORD, TO_EMAIL_USERS } from '$env/static/private'

const transporter = nodemailer.createTransport({
    host: EMAIL_SERVER_URL,
    port: Number(EMAIL_SERVER_PORT),
    secure: true,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
    }
});

/** @type {import('./$types').Actions} */
export const actions = {
    sendEmail: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('Contact-Name');
        const email = data.get('Contact-Email');
        const projectType = data.get('Contact-Type');
        const budget = data.get('Contact-Budget');
        const message = data.get('Contact-Message');

        let mailOptions = {
            from: `"WebSite Form" <${EMAIL_USER}>`, // sender address
            to: TO_EMAIL_USERS, // list of receivers
            subject: projectType + ' for ' + name, // Subject line
            html: `A New project for ${name} their email is ${email}<br /> The project's type is ${projectType}<br />Their Budget is ${budget}<br />They asked:<br /><p>${message}<p/>` // html body
        };

        const info = await transporter.sendMail(mailOptions).catch(err => {
            console.log(err);
        });

        if (info) {
            console.log('Message sent: %s', info.messageId);
            return { success: true };
        }
        return { success: false };
    }
};