import { GoogleGenerativeAI } from "@google/generative-ai";
import "jsr:@std/dotenv/load";

const genAI = new GoogleGenerativeAI(Deno.env.get("GEMINI_API_KEY")!);
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

const testPrompot = async () => {
    const prompt = "Qual seria importância dos parafusos para o nosso cotidiano";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    return result.response.text();
}

const sendPrompt = async (req :Request): Promise<string> => {
    try {
        const body = await req.text();
        const result = await model.generateContent(body);

        console.log(result.response.text());

        return result.response.text();
    } catch (error) {
        console.error("Erro ao gerar texto do Gemini", error);
        throw error;
    }
}

const sendPromptText = async (message: string): Promise<string> => {
    try {
        const result = await model.generateContent(message);

        console.log(result.response.text());

        return result.response.text();
    } catch (error) {
        console.error("Erro ao gerar texto do gemini", error);
        throw error;
    }
}

export { testPrompot, sendPrompt, sendPromptText }