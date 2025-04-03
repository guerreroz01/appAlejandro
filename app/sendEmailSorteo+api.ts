
import { Resend } from "resend";
import EmailConfSorteo from "@/components/EmailConfSorteo";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = body.user;

    if (!user || !user.email) {
      return new Response(JSON.stringify({ error: "Invalid user data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const emailRespond = await resend.emails.send({
      from: "info@univia.app",
      to: user.email,
      subject: "¡Ya estás participando! UNIVIA",
      react: EmailConfSorteo({ username: user.name || "Usuario", company: "Univia" }),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


