import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = 'https://api.nasa.gov/EPIC/api/enhanced/date';
const API_KEY = '5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = '2015-10-31';
  try {
    const response = await fetch(`${API_URL}/${date}?api_key=${API_KEY}`);
    const data = await response.json();

    console.log('Resposta da API da NASA:', data);

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ error: 'Erro ao buscar dados da NASA EPIC API' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
}