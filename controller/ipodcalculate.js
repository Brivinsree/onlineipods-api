import { ipod_constants } from "../utils/constants.js";

class IpodCalculate {
    static async IpodIndiaCostController(no_of_units) {
        const { india_cost, srilanka_cost, transport_cost, india_stocks, srilanka_stocks } = ipod_constants;
        let calculateMinCost = 0, stocksLeftInSrilanka = srilanka_stocks, stocksLeftInIndia = india_stocks;
        if (no_of_units <= india_stocks) { //India stock not exceed 100
            let units_remainder = no_of_units % 10;
            const remaining_units = no_of_units - units_remainder;
            const transportCost = transport_cost * (remaining_units / 10);
            const srilanka_ipod_cost = srilanka_cost * remaining_units;
            if (units_remainder === 0) {
                calculateMinCost = transportCost + srilanka_ipod_cost;
                stocksLeftInSrilanka -= no_of_units;
            } else {
                const india_ipod_cost = india_cost * units_remainder;
                calculateMinCost = srilanka_ipod_cost + india_ipod_cost + transportCost;
                stocksLeftInSrilanka -= remaining_units;
                stocksLeftInIndia -= units_remainder;
            }
        } else { //India Stock Exceeds 100
            let remaining_units = no_of_units - india_stocks;
            const transportCost = transport_cost * (srilanka_stocks / 10);
            const srilanka_ipod_cost = srilanka_cost * srilanka_stocks;
            const india_ipod_cost = india_cost * remaining_units;
            calculateMinCost = srilanka_ipod_cost + india_ipod_cost + transportCost;
            stocksLeftInSrilanka -= srilanka_stocks;
            stocksLeftInIndia -= remaining_units;
        }
        return {
            calculateMinCost,
            stocksLeftInSrilanka,
            stocksLeftInIndia
        }
    }
    static async IpodSrilankaCostController(no_of_units) {
        const { india_cost, srilanka_cost, transport_cost, india_stocks, srilanka_stocks } = ipod_constants;
        //Initialize the variable
        let calculateMinCost = 0, stocksLeftInSrilanka = srilanka_stocks, stocksLeftInIndia = india_stocks;;
        if (no_of_units <= srilanka_stocks) { //No of units less than or equal to Srilanka Stocks
            calculateMinCost = srilanka_cost * no_of_units;
            stocksLeftInSrilanka = stocksLeftInSrilanka - no_of_units;
        } else { //If no of units exceeds than Srilanka Stocks
            let remaining_units = no_of_units - srilanka_stocks;
            let units_remainder = remaining_units % 10;
            let transport_constraints = Math.ceil(remaining_units / 10) * 10;
            const units_block_transport = transport_constraints / 10; //Transport cost 10 units of block
            calculateMinCost = srilanka_cost * (srilanka_stocks - (transport_constraints - remaining_units));
            stocksLeftInSrilanka = units_remainder === 0 ? 0 : stocksLeftInSrilanka - (stocksLeftInSrilanka - (transport_constraints - remaining_units));
            if (remaining_units <= india_stocks) {
                calculateMinCost += (india_cost * transport_constraints) + (transport_cost * units_block_transport);
                stocksLeftInIndia -= transport_constraints;
            } else {
                throw new Error("Stocks is insufficient for India and Srilanka");
            }
        }
        return {
            calculateMinCost,
            stocksLeftInSrilanka,
            stocksLeftInIndia
        }
    }
}

export default IpodCalculate;


