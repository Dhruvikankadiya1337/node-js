import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename); 

const logger = (req, res, next) => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(`${req.method} ${req.url}  ${currentTime}`);
    next();
};

export default logger;
