import { sendPrompt, testPrompot } from "../service/geminiService.ts";

export const getPromptTest = async (_req: Request): Promise<Response> => {
    const promptValue = await testPrompot();
    return new Response(promptValue, { status: 200, headers: { "Content-Type": "text/plain" }} )
}

export const postPrompt = async (_req: Request): Promise<Response> => {
    return new Response(sendPrompt('tome'), { status: 201, headers: { "Content-Type": "application/json"}})
}