import { MongoClient, Db } from 'mongodb';
console.log('🔗 Initializing MongoDB connection...');
const uri = process.env.MONGODB_URI!;
if (!uri) {
  throw new Error('❌ Please define the MONGODB_URI environment variable');
}

const client = new MongoClient(uri);
console.log('🔗 Connecting to MongoDB...');
let dbInstance: Db | null = null;
let isConnected = false;


export async function connectToDatabase(): Promise<Db> {
  if (isConnected && dbInstance) {
    console.log('🔗 Reusing existing MongoDB connection');
    return dbInstance;
  }

  try {
    await client.connect();
    console.log('🔗 MongoDB connection established');
    isConnected = true;
    dbInstance = client.db('myDB'); // Replace with your DB name
    console.log('✅ MongoDB connected');
    return dbInstance;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    throw error;
  }
}

export async function closeDatabaseConnection() {
  if (isConnected) {
    await client.close();
    isConnected = false;
    dbInstance = null;
    console.log('🛑 MongoDB connection closed');
  }
}
