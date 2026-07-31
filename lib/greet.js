/**
 * Pure function used by the /api/hello serverless function.
 * Kept separate from the HTTP handler so it can be unit-tested
 * without spinning up a server (important for a fast CI test stage).
 */
function greet(name) {
  const cleanName = (name && String(name).trim()) || "Course Participant";
  return `Greetings, ${cleanName}! Have a good day!`;
}

module.exports = { greet };
