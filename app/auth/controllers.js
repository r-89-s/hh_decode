const sendEmail = require('../utils/sendMail')

const sendVerificationEmail = (req, res) => {
    console.log(req.body)
    
    const code = "HH" + Date.now()
    sendEmail(req.body.email, "Код авторизации hh", code)

    res.status(200).end()
}

module.exports = {sendVerificationEmail}