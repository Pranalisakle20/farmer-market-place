import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("database connection successfully");
    } catch (error) {
        console.log(error, "error in database connection");
    }
}

export default connectDB