import app from "./app.js";
import { sequelize } from './database/database.js';
import 'dotenv/config';
import logger from "./logs/logger.js";

async function main(){
    await sequelize.sync({force:false});
    console.clear();
    const PORT=process.env.PORT;
    app.listen(PORT);
    logger.info(`Server on port ${PORT}`);
    
}

main();