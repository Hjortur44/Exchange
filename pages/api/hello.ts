// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {

  const KEY = process.env.KEY;
  const url = "http://api.exchangeratesapi.io/v1/";
  let result = null;
  let endpoint = "latest"

  try {
    result = await fetch(`${url}${endpoint}?${KEY}`);
  } catch (e) {
    console.error(`Failed to fetch from: ${url}`, e);
    throw e;
  }

  if (!result.ok) {
    console.info(await result.text());
    throw new Error(`Error -> non 200 status: ${result.status}`);
  }

  const answer = await result.json();

  res.status(200).json(answer);
};