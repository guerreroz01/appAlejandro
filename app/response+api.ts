import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// 🔧 Configuración del mensaje del sistema
const systemContentMessage = `
1. Se te dará una lista de preguntas y respuestas.
2. Basándote en las preguntas y respuestas suministradas, proporcionarás 4 carreras universitarias. 
3. Cada carrera incluirá su nombre, una breve descripción del por qué ha sido elegida y su porcentaje basado en el total (los porcentajes no serán en ningún caso iguales entre si y mientras mayor sea la diferencia mejor, los porcentajes es mejor que no sean números redondos).
4. Responderás únicamente con un objeto JSON en el siguiente formato: 
[
  { "name": "", "description": "", "percent": "" },
  { "name": "", "description": "", "percent": "" },
  { "name": "", "description": "", "percent": "" },
  { "name": "", "description": "", "percent": "" }
]
5. No incluirás ningún otro texto o comentario fuera del formato JSON.
`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const allAnswers = body.answers;

    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemContentMessage },
        {
          role: "user",
          content: `Basándote en las siguientes preguntas, ¿qué 4 carreras universitarias recomiendas? 
          Responde en el formato JSON indicado sin comentarios adicionales. 
          ${JSON.stringify(allAnswers)}`,
        },
      ],
    });

    const responseContent = response.choices[0]?.message?.content?.trim() || "";

    if (!responseContent) {
      throw new Error("La respuesta de OpenAI está vacía.");
    }

    type ApiResponseArray = {
      name: string;
      description: string;
      percent: string;
    }[];

    function normalizeApiResponse(apiResponse: string): ApiResponseArray {
      try {
        // 🔹 Eliminar etiquetas Markdown que OpenAI pueda agregar
        let cleanedResponse = apiResponse.replace(/```json|```/g, "").trim();

        console.log("📜 Respuesta limpiada:", cleanedResponse);

        // 🔹 Intentar parsear la respuesta
        const parsedResponse = JSON.parse(cleanedResponse);

        if (!Array.isArray(parsedResponse)) {
          console.error(
            "❌ Error: la respuesta no es un array válido:",
            parsedResponse
          );
          return [];
        }

        return parsedResponse;
      } catch (error) {
        console.error("❌ Error al parsear JSON:", error);
        return [];
      }
    }

    return Response.json({
      success: true,
      content: normalizeApiResponse(responseContent),
    });
  } catch (error) {
    console.error("❌ Error en el procesamiento:", error);
    return Response.json(
      {
        success: false,
        error: "Ocurrió un error inesperado al procesar la solicitud.",
      },
      { status: 500 }
    );
  }
}
