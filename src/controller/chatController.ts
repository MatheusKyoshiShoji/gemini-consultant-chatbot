import { sendPrompt, testPrompot } from "../service/geminiService.ts";

export const getPromptTest = async (_req: Request): Promise<Response> => {
    const promptValue = await testPrompot();
    return new Response(promptValue, { status: 200, headers: { "Content-Type": "text/plain" }} )
}

export const postPrompt = async (_req: Request): Promise<Response> => {
    try {
        const response = await sendPrompt(_req);
        return new Response(JSON.stringify({data: response}), { status: 201, headers: { "Content-Type": "application/json"}});
    } catch (err: unknown) {
        if (err instanceof SyntaxError) {
            return new Response(JSON.stringify({ error: "Erro ao trator o prompt ", details: err.message }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            })
        }

        throw err;
    }
}