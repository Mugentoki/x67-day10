const { greet } = require("../lib/greet");

/**
 * Vercel Serverless Function: GET /api/hello?name=...
 * This is the "application" this pipeline builds, tests, and deploys.
 */
module.exports = (req, res) => {
  const { name } = req.query || {};
  res.status(200).json({
    message: greet(name),
    deployedAt: new Date().toISOString(),
  });
};
