const nodemailer = require('nodemailer')


const setEmailSenderService = async (body) => {

    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.elasticemail.com',
            port: 2525,
            auth: {
                user: 'skotmadmc@gmail.com',
                pass: '75FE33F17BB88EEE47D22E3C39B747A448DF'
            }
        })

        let mailOptions = {
            from: 'skotmadmc@gmail.com',
            to: "Fizzmc@yandex.ru",
            subject: body.name,
            text: body.phone + " \n" + body.text + " \n" + body.email
        };

        
        // Отправка письма
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error(error);
    }
}

module.exports = setEmailSenderService
