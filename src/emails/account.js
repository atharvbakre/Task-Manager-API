const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'atharvbakre4567@gmail.com',
        subject: 'Welcome to Task Manager API',
        text: `Thank you for joining Task Manager ${name}`
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'atharvbakre4567@gmail.com',
        subject: 'Task Manager API - Sorry to see you go!',
        text: `Thank you for being with Task Manager ${name}. Let us know what we can do better!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}