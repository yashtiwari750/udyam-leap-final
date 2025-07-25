// test-gemini.js
// This file is a direct test of the Gemini API.

// We need this to read our .env.local file
import 'dotenv/config'; 
import { GoogleGenerativeAI } from "@google/generative-ai";

// Get the key directly from the environment
const apiKey = process.env.VITE_GEMINI_API_KEY;
console.log(`--- Workbench Test ---`);
console.log(`Reading API Key: ${apiKey ? "Found a key" : "Key is UNDEFINED"}`);

// Check if the key exists before proceeding
if (!apiKey) {
  console.error("ERROR: Could not find VITE_GEMINI_API_KEY in your .env.local file.");
  process.exit(1); // Exit the script if no key is found
}

const genAI = new GoogleGenerativeAI(apiKey);

async function runTest() {
  try {
    console.log("Connecting to the Gemini model...");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const prompt = "Give me a one-sentence motivational quote.";

    console.log("Sending prompt to the AI...");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("\n--- SUCCESS! ---");
    console.log("AI Response:", text);
    console.log("------------------\n");

  } catch (error) {
    console.log("\n--- TEST FAILED ---");
    console.error("The test failed with this error:", error);
    console.log("-------------------\n");
  }
}

runTest();