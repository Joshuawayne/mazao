
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// IMPORTANT: API key handling should be done securely. 
// For frontend-only applications without a backend proxy, this is a simplification.
// In a production app, the API key should ideally not be exposed directly on the client-side.
// A backend proxy that makes requests to Gemini API is the recommended approach.
// The prompt assumes process.env.API_KEY is pre-configured and accessible.
const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (API_KEY) {
  try {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
    // Potentially alert the user or disable AI features if initialization fails
  }
} else {
  console.warn("API_KEY for Gemini is not set. Chatbot will use mock responses or be disabled.");
}

const GEMINI_MODEL_NAME = 'gemini-2.5-flash-preview-04-17';

interface ChatbotResponse {
  text: string;
  error?: string;
}

/**
 * Generates a chatbot response using the Gemini API.
 * If the API key is not available or an error occurs, it may return a predefined message or an error.
 * @param userInput The text input from the user.
 * @returns A Promise resolving to a ChatbotResponse object.
 */
export const generateChatbotResponse = async (userInput: string): Promise<ChatbotResponse> => {
  if (!ai) {
    console.warn("Gemini AI not initialized. Returning mock response.");
    return { 
        text: "Thank you for your message. The AI assistant is currently under maintenance. Please try again later or ask simple questions like 'How do I sell maize?'",
        error: "AI not initialized"
    };
  }

  if (!userInput.trim()) {
    return { text: "Please type a message." };
  }

  try {
    console.log(`Sending to Gemini (${GEMINI_MODEL_NAME}): "${userInput}"`);
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: GEMINI_MODEL_NAME,
        contents: userInput,
        // config: { systemInstruction: "You are AgriBot, a helpful AI assistant for Kenyan farmers. Be concise and friendly. Answer in the user's language if possible (assume Swahili or English if not specified)." }
    });
    
    const textResponse = response.text;
    console.log("Gemini response:", textResponse);
    
    if (!textResponse || textResponse.trim() === "") {
        return { text: "I'm not sure how to respond to that. Could you try asking in a different way?" };
    }
    return { text: textResponse };

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Check for specific error types if needed, e.g., from @google/generative-ai
    // if (error instanceof GoogleGenerativeAIError) { ... }
    return {
      text: "Sorry, I encountered an issue trying to understand that. Please try again.",
      error: error instanceof Error ? error.message : String(error),
    };
  }
};
