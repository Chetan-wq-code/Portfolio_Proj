import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const BREVO_API_KEY = process.env.BREVO_API_KEY
const DEST_EMAIL = process.env.CONTACT_TO_EMAIL || 'ckdevalatkar@gmail.com'
const SENDER_EMAIL = process.env.CONTACT_FROM_EMAIL || 'ckdevalatkar@gmail.com'

if (!BREVO_API_KEY) {
  console.error('Missing BREVO_API_KEY in environment. Create a .env file with BREVO_API_KEY=...')
  process.exit(1)
}

app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  try {
    const payload = {
      sender: { name: 'Portfolio Contact', email: SENDER_EMAIL },
      to: [{ email: DEST_EMAIL, name: 'Chetan' }],
      replyTo: { email, name },
      subject: `Portfolio contact from ${name}`,
      textContent: `New portfolio message\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      htmlContent: `
        <h1>New portfolio message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    })

    const result = await response.json()
    

    if (!response.ok) {
      console.error('Brevo API error:', result)
      return res.status(response.status).json({ error: result.message || JSON.stringify(result) })
    }

    return res.json({ success: true, result })
  } catch (error) {
    console.error('Contact endpoint error:', error)
    return res.status(500).json({ error: 'Unable to send email at this time.' })
  }
})

app.listen(PORT, () => {
  console.log(`Contact API server listening on http://localhost:${PORT}`)
})
