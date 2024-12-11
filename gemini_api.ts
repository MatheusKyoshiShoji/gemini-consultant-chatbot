import { GoogleGenerativeAI } from "@google/generative-ai";
import "jsr:@std/dotenv/load";

const genAI = new GoogleGenerativeAI(Deno.env.get("GEMINI_API_KEY")!);
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

const prompt = "Qual seria importância dos parafusos para o nosso cotidiano";

const result = await model.generateContent(prompt);
console.log(result.response.text());