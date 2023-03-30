import { NextApiRequest, NextApiResponse } from "next";

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const { cookies } = req;

  const jwt = cookies.userToken;

  console.log(jwt);

  if (!jwt) {
    return res.status(401).json({ message: "Invalid token!" });
  }

  res.json({ message: "Top secret data!" });
}
