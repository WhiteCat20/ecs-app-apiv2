//define API key
const API_KEY = process.env.API_KEY;

export const checkApiKey = (req, res, next) => {
  const apiKey = req.query.api_key;
  if (apiKey && apiKey === API_KEY) {
    next();
  } else {
    res.status(401).send("Invalid API key");
  }
};
