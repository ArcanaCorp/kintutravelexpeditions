import { GoogleGenAI } from "@google/genai";
import { API_KEY_GEMINI, content } from "../config";

const ai = new GoogleGenAI({
    apiKey: API_KEY_GEMINI,
});

export async function askAI(userMessage) {

    const prompt = `Eres el asistente virtual oficial de Kintu Travel Expeditions.
        Información interna (NO LA MENCIONES EXPLÍCITAMENTE):
        ${JSON.stringify(content)}
        Consulta del usuario:
        "${userMessage}"
        Responde de forma clara, profesional, cercana y breve.
    `;

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
    });

    return response.text;
}
