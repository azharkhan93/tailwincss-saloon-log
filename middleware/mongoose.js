import mongoose from 'mongoose';

const connectDB = async () => {
  try {

   const uri = 'mongodb://localhost:27017/saloonlog';
    // console.log('Connecting to MongoDB at:', uri);
   
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
  }
};

export default connectDB;




