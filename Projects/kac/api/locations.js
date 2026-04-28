import fs from 'node:fs';
import path from 'node:path';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const dbPath = path.join(process.cwd(), 'public', 'data', 'location-db.json');
    const raw = fs.readFileSync(dbPath, 'utf8');
    const data = JSON.parse(raw);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: 'Failed to load location data',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
