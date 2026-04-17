import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const HOST = process.env.HOST;
    const PORT = process.env.SMTP_PORT;
    const USER = process.env.USER;
    const PASSWORD = process.env.PASSWORD;

    console.log(HOST, PORT, USER, PASSWORD);

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: HOST,
      port: Number(PORT),
      secure: true,
      auth: {
        user: USER,
        pass: PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: USER,
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
