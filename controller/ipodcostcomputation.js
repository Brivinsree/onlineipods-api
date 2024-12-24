import { ipod_constants } from "../utils/constants.js";
import IpodCalculate from './ipodcalculate.js';

class IpodCostComputation {
    static handleCountryInfo(country_name, no_of_units) {
        if (country_name === ipod_constants.country_name_india) {
            return IpodCalculate.IpodIndiaCostController(no_of_units);
        }
        if (country_name === ipod_constants.country_name_srilanka) {
            return IpodCalculate.IpodSrilankaCostController(no_of_units);
        }
        throw new Error("Invalid Country Name");
    }

}

export default IpodCostComputation;