const bcrypt = require("bcrypt");
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
var jwt = require("jsonwebtoken");
const cookie = require("cookie");

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  // Authentication
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const accessToken = jwt.sign({ userId: user.id, email: email }, JWT_SECRET, {
    expiresIn: "30s",
  });

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("userToken", accessToken, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "development",
      sameSite: "strict",
      maxAge: 30,
    })
  );

  return res
    .status(200)
    .json({ accessToken: accessToken, message: "Successfully logged in!" });
}
