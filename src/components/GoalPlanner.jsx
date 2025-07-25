
// FILE 2: src/components/GoalPlanner.jsx
// This file does not need any changes.

import React, { useState } from 'react';
import { generatePlan } from '../gemini';

export default function GoalPlanner() {
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState([]);

  const handleGeneratePlan = async () => {
    if (!goal) {
      alert("Please enter a goal first.");
      return;
    }
    setLoading(true);
    setPlan([]);

    const fullPrompt = `Create a simple, step-by-step action plan for this goal: "${goal}". Provide 5-7 clear, actionable steps, with each step starting with "Step X:" or a bullet point.`;

    const generatedPlanArray = await generatePlan(fullPrompt);

    setPlan(generatedPlanArray);
    setLoading(false);
  };

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-inner w-full max-w-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Let's Plan Your Leap</h2>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          className="flex-grow shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g., Start a home baking business"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          disabled={loading}
        />
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-purple-300"
          onClick={handleGeneratePlan}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Plan'}
        </button>
      </div>

      {plan.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Your Action Plan:</h3>
          <ul className="list-disc list-inside space-y-2">
            {plan.map((step, index) => (
              <li key={index} className="text-gray-700">
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
