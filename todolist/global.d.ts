import mongoose from 'mongoose';

declare global {
  var _mongoose: Promise<typeof mongoose> | undefined;
}