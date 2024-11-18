import { Router } from "express";
import formController from "./form.controller";
import authUser from "../../middleware/authentiication";
import adminAuth from "../../middleware/adminAuth";

const formRoute = Router()

formRoute.post('/submit',authUser,formController.submit)
formRoute.get('/pendingreq',adminAuth,formController.pendingReq)
formRoute.get('/finishedreq',adminAuth,formController.finishedReq)

export default formRoute