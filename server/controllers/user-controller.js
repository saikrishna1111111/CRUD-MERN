import User from "../schema/userSchema.js";

const addUserController = async (request, response) => {
  debugger;
  const user = request.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export default addUserController;
