import 'dotenv/config';

const apiKey = process.env.GEMINI_API_KEY!;
const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

export async function askGemini(prompt: string): Promise<string> {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const data = await response.json();
    console.log("Gemini Raw Response:", JSON.stringify(data, null, 2));

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return reply || '[NO response]';
  } catch (error) {
    console.error('Gemini API error:', error);
    return '[Error getting response]';
  }
}
