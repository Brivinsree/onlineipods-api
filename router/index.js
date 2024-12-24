import express from "express";
// import IpodController from '../controller/ipod.controller.js'
import IpodController from "../controller/ipodcontroller.js";
const router = express.Router();


router.post('/ipod/calculate/cost', IpodController.ipod_minimumcost);
// router.post('/ipod/cost', IpodController.ipod_minimumcost);
// router.post('/ipod/cost', IpodController.ipodMinimumCost);








export default router;