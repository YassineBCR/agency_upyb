import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("1. Données reçues du formulaire:", body.name);

    // Vérification des variables d'environnement
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("ERREUR CRITIQUE: EMAIL_USER ou EMAIL_PASS manquant dans .env.local");
      throw new Error("Identifiants manquants");
    }

    console.log("2. Tentative de connexion à IONOS avec:", process.env.EMAIL_USER);

    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.fr',
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Ajout de logs pour Nodemailer
      logger: true,
      debug: true, 
    });

    // Vérification de la connexion SMTP avant d'envoyer
    await new Promise((resolve, reject) => {
        transporter.verify(function (error, success) {
            if (error) {
                console.error("3. ÉCHEC CONNEXION SMTP:", error);
                reject(error);
            } else {
                console.log("3. Connexion SMTP réussie ! Prêt à envoyer.");
                resolve(success);
            }
        });
    });

    const mailOptions = {
      from: `"Site UPYB" <${process.env.EMAIL_USER}>`,
      to: 'yassine.b@upyb.fr', 
      replyTo: body.email,
      subject: `🚀 Nouvelle Mission : ${body.name}`,
      html: `
        <h1>Nouvelle demande de ${body.name}</h1>
        <p>Email: ${body.email}</p>
        <p>Tel: ${body.phone}</p>
        <p>Service: ${body.service}</p>
        <p>Budget: ${body.budget}</p>
        <p>Message: ${body.description}</p>
      `,
    };

    console.log("4. Envoi du mail en cours...");
    await transporter.sendMail(mailOptions);
    console.log("5. Mail envoyé avec succès !");

    return NextResponse.json({ success: true, message: 'Email envoyé' });

  } catch (error: any) {
    console.error('--- ERREUR FINALE ---');
    console.error(error); // C'est ce message qui nous dira pourquoi ça plante
    return NextResponse.json(
        { success: false, message: error.message || 'Erreur serveur' }, 
        { status: 500 }
    );
  }
}