const sgMail = require('@sendgrid/mail');

class EmailService {
    constructor(apiKey) {
        sgMail.setApiKey(apiKey);
    }

    async sendEmail(to, subject, text, html) {
        const msg = {
            to,
            from: 'your-email@example.com', // Use the email address or domain you verified with SendGrid
            subject,
            text,
            html,
        };

        try {
            await sgMail.send(msg);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
}

module.exports = EmailService;