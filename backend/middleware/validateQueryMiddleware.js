const getPromptValidity = require("../utils/promptValidity")

const validateQuery = async (req, res, next) => {
    const { query } = req.body;
    if (!query) {
        return res.status(400).send("Form cannot be empty. Please try again.")
    } else if (query.length > 555) {
        return res.status(400).send("Form input must be less than 555 characters. Please try again.")
    } else {
        promptValidity = await getPromptValidity(query)
        if (promptValidity == 2) {  // 2 indicates that prompt is neither valid or invalid, an edge case that occurs when Groq behaves unexpectedly
            return res.status(500).send("Something went wrong. Rephrase you question and try again.");
        } else if (promptValidity == 0) {
            return res.status(400).send("Question invalid. Are you asking for assistance with financial resources? Make sure you specify your situation (i.e. student, parent, etc.)");
        }
    }
    next()
}

module.exports = validateQuery