import app from "./app.js";
import { connectDB } from "./src/db.js";

connectDB();
app.listen(4000)
console.log('server on port', 4000);

