export async function GET() {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return Response.json(
      { status: "ERROR", message: "API key not found in environment" },
      { status: 500 }
    );
  }

  const keyPreview = apiKey.substring(0, 20) + "...";
  const keyLength = apiKey.length;

  return Response.json({
    status: "OK",
    keyPreview,
    keyLength,
    startsWithGsk: apiKey.startsWith("gsk_"),
    endsWithCorrectPattern: apiKey.substring(keyLength - 10),
    message: "If this looks wrong, the key in Vercel is incorrect",
  });
}
