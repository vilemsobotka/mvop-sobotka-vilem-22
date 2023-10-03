// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("query", req.query);
  if(req.method === "GET"){
    res.status(200).json(req.query )
    return;
  }
  if(req.method === "POST"){
    res.status(200).json({name: req.body.name})
    return;
  }

  res.status(405).send("method not allowed");
}
