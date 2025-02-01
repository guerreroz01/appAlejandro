import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// TODO: Mensaje del sistema para configurar el comportamiento del modelo
const systemContentMessage = `
Eres un asistente inteligente preparado para responder preguntas generales de forma concisa y útil.
`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const allAnswers = body.answers;
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemContentMessage,
        },
        {
          role: "user",
          content: `${JSON.stringify(
            allAnswers
          )} Basandote en las siguientes preguntas cuales 5 carreras universitarias recomiendas? responde en cada carrera con su correspondiente porcentaje y limitate a solo enumeraralas con su porcentaje sin comentarios adicionales`,
        },
      ],
    });

    const responseContent = response.choices[0]?.message?.content || "";

    return Response.json({ success: true, content: responseContent });
  } catch (error: unknown) {
    console.error("Unknown error:", error);
    return Response.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
