import mysql from"mysql2/promise";
import dotenv from "dotenv"


dotenv.config();
const connection = await mysql.createConnection({
    host:"localhost",
    user:"wilsondelgado",
    password:"1102717619",
    database:"bb_cacao_chucureño"
})
export default connection;
// connection  mysql
// vamos a crear la conexion a postgres como migro ? 