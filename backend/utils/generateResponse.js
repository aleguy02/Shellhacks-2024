Groq = require("groq-sdk");
require("dotenv").config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const generateResponse = async (query) => {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Given the provided query from a user, please answer the query in a way such that your response addresses a financial assistance program providing aid or subsidies,  explains eligibility criteria, required documents, or qualifications for applying to a financial assistance program or attending in-person services, focuses on how to apply for services or aid in person** at a local office or service center, clarifies how to receive or manage program benefits,** particularly when involving in-person collection or usage (e.g., picking up EBT cards), mentions support services that are connected to the financial aid program and requires in-person interaction, such as interviews or counseling, address local or regional differences in how a program operates (e.g., state-specific benefits, local office policies), provides information on renewing or updating program participation that requires in-person follow-up, provides information about emergency financial aid or services that can be accessed in person, focuses on addressing only the query presented, without introducing multiple or unrelated answers, and offers clear and concise instructions on what the financial assistance programs or locations provide, and clarifies any specialized vocabulary or terms that might be confusing to the user.


This is the query: ${query}. FORMAT YOUR RESPONSE AS A PARAGRAPH LIMITED TO 4 SENTENCES MAXIMUM.`,
      },
    ],
    model: "llama3-8b-8192",
  });

  // Print the completion returned by the LLM.
  return chatCompletion.choices[0]?.message?.content;
};

module.exports = generateResponse;
