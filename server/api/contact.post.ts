// This is a server route handler for contact form submissions
// Path: server/api/contact.post.ts

import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    // Parse the request body
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return {
        status: 'error',
        message: 'Name, email, and message are required'
      }
    }
    
    // Configure email transporter
    // For development/testing, you can use a service like Mailtrap
    // For production, configure with your actual email service
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.mailtrap.io',
      port: parseInt(process.env.EMAIL_PORT || '2525'),
      auth: {
        user: process.env.EMAIL_USER || 'your_mailtrap_user',
        pass: process.env.EMAIL_PASS || 'your_mailtrap_password'
      }
    })
    
    // Setup email data
    const mailOptions = {
      from: `"Portfolio Contact" <contact@jannikfauser.design>`,
      to: process.env.CONTACT_EMAIL || 'jannik.fauser@hfg.design',
      subject: `New Portfolio Message from ${body.name}`,
      text: `
        Name: ${body.name}
        Email: ${body.email}
        
        Message:
        ${body.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #40939B;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f7f7f7; border-radius: 8px;">
            <p><strong>Message:</strong></p>
            <p>${body.message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `
    }
    
    // Send email
    await transporter.sendMail(mailOptions)
    
    // Optional: Save to database if you want to keep a record of messages
    // This would require setting up a database connection
    
    return {
      status: 'success',
      message: 'Your message has been sent successfully!'
    }
  } catch (error) {
    console.error('Error sending contact form:', error)
    
    return {
      status: 'error',
      message: 'There was an error sending your message. Please try again later.'
    }
  }
})