import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "../../libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end;
  }

  try {
    const { email, name, username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = prisma.user.create({
      data: {
        email,
        username,
        name,
        hashedPassword,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error,
    });
  }
}
