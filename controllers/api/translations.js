const baseUrl = "https://www.dictionaryapi.com/api/v3/references/spanish/json/";

module.exports = {
  getTranslation
};

async function getTranslation(req, res) {
  try {
    const reqUrl = `${baseUrl}${req.params.words}?key=${process.env.API_KEY}`;
    const response = await fetch(reqUrl);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
