import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createAttendancePiket = async (req, res) => {
  const { nama_asisten, hari, berita_acara } = req.body;
  try {
    const piket = await prisma.absenPiket.create({
      data: {
        nama_asisten,
        hari,
        berita_acara,
      },
    });
    res.json(piket);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

export const getAllPiket = async (req, res) => {
  const all_piket = await prisma.absenPiket.findMany();
  res.json(all_piket);
};

export const deletePiket = async (req, res) => {
  const { id } = req.params;
  try {
    const delete_piket = await prisma.absenPiket.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.json(delete_piket);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};
