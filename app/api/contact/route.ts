import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialisation de Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, budget, description } = body;

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: 'UPYB <contact@upyb.fr>', // Votre adresse validée
      to: ['yassine.b@upyb.fr'],      // Votre adresse de réception
      replyTo: email,                 // Pour répondre au client en 1 clic
      subject: `🚀 Nouvelle Mission : ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7A3CFF;">Nouvelle demande de projet</h1>
          <p><strong>Client :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Téléphone :</strong> <a href="tel:${phone}">${phone}</a></p>
          <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <h3>Détails de la mission :</h3>
          <ul>
            <li><strong>Service :</strong> ${service}</li>
            <li><strong>Budget :</strong> ${budget}</li>
          </ul>
          <h3>Message :</h3>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #7A3CFF;">
            ${description || "Aucune description fournie."}
          </blockquote>
        </div>
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur Serveur:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}