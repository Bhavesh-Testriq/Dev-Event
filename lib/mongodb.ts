import mongoose, { mongo } from "mongoose";

type MongooseCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Keep the cache on the global object so it survives Next.js development reloads.
declare global {
  var mongoose: MongooseCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

let cached: MongooseCache = global.mongoose ?? {
  connection: null,
  promise: null,
};

if (!global.mongoose) {
  global.mongoose = cached;
}

/** Establishes and reuses the application's MongoDB connection. */
export async function connectDB(): Promise<typeof mongoose> {
  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    // Disabling command buffering makes an unavailable database fail fast.
    if (!MONGODB_URI) {
      throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
    }
    
    const options = { bufferCommands: false };

    cached.promise = mongoose.connect(MONGODB_URI!, options).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.connection = await cached.promise;
  } catch (error) {
    // Allow a later request to retry if the initial connection attempt fails.
    cached.promise = null;
    throw error;
  }

  return cached.connection;
}
