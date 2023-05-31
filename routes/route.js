import express from "express";
import { createUser, getUsers } from "../controllers/MainController.js";
import {
  absenManual,
  attendace,
  createAgenda,
  createKodeAbsensi,
  deleteAgenda,
  getAgendas,
} from "../controllers/AgendaController.js";
import {
  createAttendancePiket,
  deletePiket,
  getAllPiket,
} from "../controllers/PiketController.js";
import {
  createPeminjaman,
  getAllPeminjaman,
} from "../controllers/PinjamController.js";
import upload from "../config/file-config.js";
import { Login, Logout, refreshToken } from "../controllers/AuthController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

//auth
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

router.get("/user", verifyToken, getUsers);
router.post("/user", createUser);
// agenda
router.post("/agenda", createAgenda);
router.put("/agenda/absen/:id", createKodeAbsensi);
router.get("/agenda", getAgendas);
router.post("/absen-manual/:id", absenManual);
router.post("/absen-agenda/:id", attendace);
router.delete("/agenda/:id", deleteAgenda);
// piket
router.get("/piket", getAllPiket);
router.post("/piket", createAttendancePiket);
router.delete("/piket/:id", deletePiket);
// peminjaman
router.post("/pinjam", upload, createPeminjaman);
router.get("/pinjam", getAllPeminjaman);

export default router;
