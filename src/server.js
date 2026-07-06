import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./Config/Base.js";

dotenv.config();
console.log(process.env.MONGO_URI);
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});