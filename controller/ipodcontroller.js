import IpodCostComputation from "./ipodcostcomputation.js";
import { ipod_constants } from "../utils/constants.js";


class IpodController {
    static async ipod_minimumcost(req, res) {
        try {
            const { country_name, no_of_units } = req.body;
            if (!country_name) {
                return res.status(404).json({ status: false, message: "Country Name should not be empty" });
            }
            if (!no_of_units) {
                return res.status(404).json({ status: false, message: "Units should not be empty" });
            }
            if (no_of_units > ipod_constants.total_stocks) {
                return res.status(404).json({ status: false, message: "Units exceed total stock limit" });
            }
            const computation_data = await IpodCostComputation.handleCountryInfo(country_name, no_of_units);
            return res.status(200).json({ status: true, message: "Calculation is done", calculate_result: computation_data })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ status: false, message: error.message });
        }
    }
}

export default IpodController;
