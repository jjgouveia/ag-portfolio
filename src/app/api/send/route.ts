import resend from '@/app/utils/resend';
import { NextResponse } from 'next/server';


type postProps = {
    email: string,
    name: string,
    message: string,
}

export async function POST({ name, email, message }: postProps) {
    try {
        const data = await resend.emails.send({
            headers: {
                "CORS-ENABLED": "true",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Accept, Authorization, X-Requested-With",
                "Access-Control-Allow-Credentials": "true",
            },
            from: email,
            to: "gouvik.dev@gmail.com",
            subject: `Mensagem de ${name} do Portfólio 🙋🏾‍♂️`,
            react: `<h1>Mensagem de ${name}</h1>
            <br />
            <p>${message}</p>`,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}