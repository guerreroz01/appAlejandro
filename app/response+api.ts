import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// TODO: Mensaje del sistema para configurar el comportamiento del modelo
const systemContentMessage = `
1. Se te dará una lista de preguntas y respuestas
2. Basandote en las preguntas y respuestas suministradas daras la siguiente respuesta: 4 carreras universtarias con el nombre de la carrera, una breve descripción de por qué has elegido esa carrera conforme a las preguntas suministradas y su porcentaje basandote en el total entre las 4 carreras elegidas, los porcentajes de las carreras en ningun caso serán iguales entre cada carrera 
3. El objeto debe contener los siguientes apartados name, description, percent
3. En un objeto JSON responderas con el siguiente formato: {[{name: "", description: "", percent: ""}]} cada carrera irá dentro del array con el formato de objeto suministrado
4. Solo debes limitarte a responder cada objeto en el formato suministrado y nada más, los nombres de las diferentes variables serán: {name:"",description:"",percent:""}
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
          )} Basandote en las siguientes preguntas cuales 4 carreras universitarias recomiendas? responde en cada carrera con su correspondiente porcentaje y limitate a solo enumeraralas con su porcentaje sin comentarios adicionales`,
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
