const generateResponse = require("../utils/generateResponse");
const findResources = require("../utils/findResources");

const postQuery = async (req, res) => {
  try {
    const { query, city } = req.body;
    response = await generateResponse(query);
    resources = await findResources(city, query);
    resources = JSON.stringify(resources)
    res.status(200).send({ "response": response, "resources": resources });
  } catch (error) {
    console.log("Backend error occured:", error.message)
  }
}

module.exports = postQuery