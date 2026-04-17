import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 },
      );
    }

    // Create transporter using your email credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "smshoaib2001@gmail.com",
        pass: "aswxkdjzppemjqvq",
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "smshoaib2001@gmail.com",
      subject: `New Message from ${name}`,
      text: `
        You have a new message from your portfolio contact form:
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: "Message sent successfully!" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Email sending failed:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send message. Please try again later.",
      }),
      { status: 500 },
    );
  }
}
