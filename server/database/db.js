import mongoose from "mongoose";

const dbConnect = async (username, password) => {
  const dbUrl = `mongodb+srv://gsaikrishna20011:saikrishna@cluster0.5f67utd.mongodb.net/?retryWrites=true&w=majority`
  try {
    await mongoose.connect(dbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Some thing went wrong in the data base coneection: ", error);
  }
};

export default dbConnect;
