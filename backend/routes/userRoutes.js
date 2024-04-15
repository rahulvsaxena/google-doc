import express from "express";
import {signup, login} from "../controllers/auth-controller.js";
// import { getUser } from "../controllers/user-controller";
// import { refreshToken } from "../middlewares/refreshToken";
// import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
// router.get("/user", verifyToken, getUser);
// router.get("/refresh", refreshToken, verifyToken, getUser);
// router.post("/logout", verifyToken, logout);

export default router;
