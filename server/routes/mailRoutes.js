import express from "express";
import { sendContactMail } from "../controllers/mailControllers.js";

const mailRouter = express.Router();

mailRouter.post("/send-contact", sendContactMail);

export default mailRouter;