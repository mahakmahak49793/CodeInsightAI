// /server/controllers/reviewController.js
const axios = require("axios");
const CodeSubmission = require("../models/CodeSubmission");

exports.reviewCode = async(req, res) => {
    try {
        const { language, code } = req.body;

        const prompt = `
You are a professional code reviewer.

Review the following ${language} code.

Return ONLY valid JSON (no markdown, no backticks).

Rules:
- score must be between 0 and 10
- score must be a number (not string)
- do NOT return values like 100 or 100/10

Format:
{
  "bugs": [],
  "optimizations": [],
  "securityIssues": [],
  "cleanCodeSuggestions": [],
  "score": number
}

Code:
${code}
`;

        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions", {
                model: "openrouter/free",
                messages: [{
                    role: "user",
                    content: prompt
                }],
                temperature: 0.3
            }, {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": process.env.CLIENT_URL,
                    "X-Title": "CodeInsightAI"
                }
            }
        );

        const rawText = response.data.choices[0].message.content.trim();

        let review;
        try {
            review = JSON.parse(rawText);

            // ✅ Fix score
            review.score = Math.min(10, Number(review.score) || 0);

        } catch {
            review = rawText;
        }

        // Save in DB
        const submission = await CodeSubmission.create({
            user: req.user._id,
            language,
            code,
            review: JSON.stringify(review),
        });

        res.json({
            review,
            submissionId: submission._id,
        });

    } catch (error) {
        console.log("=== FULL ERROR ===");
        console.log("Status:", error.response?.status);
        console.log("Data:", JSON.stringify(error.response?.data, null, 2));
        console.log("Message:", error.message);
        console.log("==================");

        res.status(500).json({
            message: error.response?.data?.error?.message || error.message,
        });
    };
}