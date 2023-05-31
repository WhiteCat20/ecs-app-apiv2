import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  const { name, email, password, nrp, no_telp } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
        userPreferences: {
          create: {
            nrp,
            no_telp,
          },
        },
      },
    });
    res.status(201).json(newUser);
    res.json(req.body);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        userPreferences: true,
      },
    });
    res.json(users);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

export const getUniqueUser = async (req, res) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({
    where: {},
  });
};
