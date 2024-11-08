import { sendMail } from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formBody = await req.json();

  try {
    await sendMail(formBody);
    return NextResponse.json({
      message: "mensaje enviado con éxito",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Hubo un error al enviar el mensaje",
      status: 500,
    });
  }
}
