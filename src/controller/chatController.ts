import { testPrompot } from "../service/geminiService.ts";

export const getPromptTest = async (_req: Request): Promise<Response> => {
    const promptValue = await testPrompot();
    return new Response(promptValue, { status: 200, headers: { "Content-Type": "text/plain" }} )
}