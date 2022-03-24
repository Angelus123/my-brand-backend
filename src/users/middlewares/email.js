import AppError from './appError.js'

import nodemailer from 'nodemailer'
export const sendEmail = async options => {
    const transporter =nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT,

        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD 
        }
        })
        //
        console.log(process.env.EMAIL_PORT )
   
    // 2 ) Define email options
    const mailOptions = {
        from: 'izere123@iz.io',
        to: options.email,
        subject:options.subject,
        text: options.message
       // html:
    }
    // console.log(mailOptions)
    // 3) Actualy send email

    await transporter.sendMail(mailOptions)

}
