import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in the environment variables.");
}

if (!global._mongoose) {
    global._mongoose = mongoose.connect(MONGODB_URI, {});
}

const db = global._mongoose;

export default db;