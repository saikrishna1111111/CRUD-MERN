import User from "../schema/userSchema.js";

const getUserController = async (request, response) => {
  debugger;
  try {
    const userget =  await User.find({});
    response.status(200).json(userget);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export default getUserController;
