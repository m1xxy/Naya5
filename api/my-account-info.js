export default async function handler(req, res) {
  try {
    const response = await fetch('https://sports-api.cloudbet.com/pub/v1/account/info', {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.CLOUDBET_API_KEY
      }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch' });
  }
}
