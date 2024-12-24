import express from "express";
import IpodController from "../controller/ipodcontroller.js";
import BracketsController from "../controller/printvalues.js";
const router = express.Router();


router.post('/ipod/calculate/cost', IpodController.ipod_minimumcost);
router.post('/print/combinations', BracketsController.displayBrackets);








export default router;