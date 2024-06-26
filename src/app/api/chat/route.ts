import { openai } from "@ai-sdk/openai";
import { StreamingTextResponse, streamText } from "ai";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await streamText({
    model: openai("gpt-4-turbo"),
    prompt,
  });

  return new StreamingTextResponse(result.toAIStream());
}
