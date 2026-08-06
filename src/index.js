import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './db/index.js';

dotenv.config({
    path: './.env',
});

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    const dbConnected = await connectDB();

    const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(server.address());

    if (dbConnected) {
        console.log("Database connection ready.");
    } else {
        console.warn("Server started without a database connection.");
    }
});

process.on("exit", (code) => {
    console.log("Node exited with code:", code);
});

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
});
}

startServer().catch((error) => {
    console.error('Failed to start server:', error);
});

console.log("Current Working Directory:", process.cwd());
console.log("MONGODB_URL from process.env:", process.env.MONGODB_URL);







/*****This is the one of the method but we are using 2nd method but this will also work******/



/*import express from 'express';
const app = express();
(async()=> {
   try{
        await mongoose.connect(`$(Process.env.
            Mongodb_url)/$ {DB_NAME}`)
            app.on("Error",(error)=>{
                console.log("Error:" , error)
                throw error
            })

            app.listen(Process.env.PORT,()=>{
                console.log(`App is Listening on port ${
                    port.env.PORT
                }`)
            })

   }catch(error){
     console.error("Error : ",error)
     throw error
   }
})()
*/