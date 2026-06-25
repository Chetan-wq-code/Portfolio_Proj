export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: 'Portfolio Contact', email: process.env.CONTACT_FROM_EMAIL },
        to: [{ email: process.env.CONTACT_TO_EMAIL, name: 'Chetan' }],
        replyTo: { email, name },
        subject: `New message from ${name}`,
        htmlContent: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
      }),
    });

    if (!response.ok) throw new Error('Email send failed');
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
