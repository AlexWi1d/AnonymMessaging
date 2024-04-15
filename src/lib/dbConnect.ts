import mongoose from "mongoose";
import { deflate } from "zlib";

type ConnectionObject = {
    isConnected ?: number
}

const connection : ConnectionObject = {}

async function dbConnect() : Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to DB");
        return
    }
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})
        connection.isConnected = db.connections[0].readyState
        console.log("DB connected successfully");

    }catch(error){
        console.log("DataBase connection failed", error);
        process.exit(1)
    }
}

export default dbConnect