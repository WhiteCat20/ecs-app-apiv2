import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createAgenda = async (req, res) => {
  const { nama_agenda, tanggal, deskripsi } = req.body;
  try {
    const new_agenda = await prisma.agenda.create({
      data: {
        nama_agenda,
        tanggal,
        deskripsi,
      },
    });
    res.json(new_agenda);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

export const getAgendas = async (req, res) => {
  try {
    const agendas = await prisma.agenda.findMany({
      include: {
        absensi: true,
      },
    });
    res.json(agendas);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

export const deleteAgenda = async (req, res) => {
  const { id } = req.params;
  try {
    const delete_agenda = await prisma.agenda.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.json(delete_agenda);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

export const createKodeAbsensi = async (req, res) => {
  const { id } = req.params;
  let kode_absensi = Math.floor(Math.random() * 900000) + 100000;
  kode_absensi = kode_absensi.toString();
  try {
    const filledAgenda = await prisma.agenda.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        kode_absensi,
      },
    });
    res.json(filledAgenda);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

export const attendace = async (req, res) => {
  const { id } = req.params;
  const { nama_asisten, kode_absensi } = req.body;

  //take agenda
  const current_agenda = await prisma.agenda.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });

  if (!current_agenda || current_agenda.kode_absensi !== kode_absensi) {
    return res.status(404).json({ error: "Invalid Attendance Code!" });
  }

  try {
    const attendee = await prisma.absenAgenda.create({
      data: {
        nama_asisten,
        status_absen: "sendiri",
        agenda: {
          connect: {
            id: parseInt(id, 10),
          },
        },
      },
    });
    res.json(attendee);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};

export const absenManual = async (req, res) => {
  const { id } = req.params;
  const { nama_asisten } = req.body;

  //take agenda
  const current_agenda = await prisma.agenda.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });

  if (!current_agenda) {
    return res.status(404).json({ error: "agenda not found!" });
  }

  try {
    const attendee = await prisma.absenAgenda.create({
      data: {
        nama_asisten,
        status_absen: "diabsenkan",
        agenda: {
          connect: {
            id: parseInt(id, 10),
          },
        },
      },
    });
    res.json(attendee);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
};
