import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPeminjaman = async (req, res) => {
  try {
    const {
      nama_peminjam,
      nama_barang,
      kepentingan,
      tanggal_pinjam,
      tanggal_kembali,
      jaminan,
      signature,
    } = req.body;
    const peminjaman_barang = await prisma.ecsPinjam.create({
      data: {
        nama_peminjam,
        nama_barang,
        kepentingan,
        tanggal_pinjam,
        tanggal_kembali,
        foto_barang: req.files["foto_barang"][0].path,
        jaminan,
        signature,
      },
    });
    res.json(peminjaman_barang);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

export const getAllPeminjaman = async (req, res) => {
  const all_peminjaman = await prisma.ecsPinjam.findMany();
  res.json(all_peminjaman);
};
