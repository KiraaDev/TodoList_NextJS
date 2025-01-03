import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!global._mongoose) {
    global._mongoose = mongoose.connect(MONGODB_URI);
}

const db = global._mongoose;

export default db;