const nodemailer = require('nodemailer');

// Настройка транспорта
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'satkhanov.r@gmail.com', // ваш email
        pass: 'ersuxvzlgzplovfq',  // ваш пароль
    },
});

// Настройка сообщения
function sendEmail(to, subject, text) {
    const mailOptions = {
        from: 'satkhanov.r@gmail.com', // от кого
        to: to, // получатель
        subject: subject, // тема
        text: text, // текст письма
    };

    //отправка email
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error)
        }else{
            console.log("Email sent: " + info.response)
        }
    });
}

module.exports = sendEmail
