const generateBrackets = (number) => {
    console.log(number, "number");
    const braces_result = [];
    function recursiveFn(initial, open_bracket, close_bracket) {
        if (open_bracket === number && close_bracket === number) {
            braces_result.push(initial);
        }
        if (open_bracket < number) {
            recursiveFn(initial + '(', open_bracket + 1, close_bracket);
        }
        if (close_bracket < open_bracket) {
            recursiveFn(initial + ')', open_bracket, close_bracket + 1);
        }
    }
    recursiveFn('', 0, 0);
    return braces_result;
}

class BracketsController {
    static async displayBrackets(req, res) {
        try {
            const { number_of_braces } = req.body;
            if (number_of_braces < 0) {
                return res.status(404).json({ status: failed, message: "Please enter positive number" });
            }
            const result = generateBrackets(number_of_braces);
            return res.status(200).json({ status: true, parantheses_result: result });
        } catch (error) {
            return res.status(500).json({ status: false, message: error.message });
        }
    }
}


export default BracketsController;