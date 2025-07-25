// FILE 1: src/gemini.js
// FINAL, POLISHED VERSION: This file now cleans up extra markdown formatting.

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

export async function generatePlan(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // --- FINAL, MOST ROBUST PARSING LOGIC ---
    const lines = text.split('\n');
    const planSteps = [];

    for (const line of lines) {
      const trimmedLine = line.trim();

      // Check if the line is a valid step (starts with "Step X:" or a bullet point "*")
      if (/^step \d+:/i.test(trimmedLine) || trimmedLine.startsWith('*')) {
        let stepText = trimmedLine;

        // If it's a "Step X:" line, remove that part.
        if (/^step \d+:/i.test(stepText)) {
          const colonIndex = stepText.indexOf(':');
          stepText = stepText.substring(colonIndex + 1).trim();
        }

        // Clean up the text: remove leading asterisks and the ** for bolding.
        stepText = stepText.replace(/^\*\s*/, '').replace(/\*\*/g, '').trim();

        // Only add the step if it's not empty after cleaning.
        if (stepText.length > 0) {
          planSteps.push(stepText);
        }
      }
    }

    if (planSteps.length > 0) {
      return planSteps;
    } else {
      console.error("Could not parse steps from AI response. Raw response was:", text);
      return ["Sorry, the AI gave a response in an unexpected format. Please try again."];
    }
    // --- END OF FINAL LOGIC ---

  } catch (error) {
    console.error("Error generating plan from text:", error);
    return ["Sorry, there was an issue understanding the AI's response."];
  }
}
