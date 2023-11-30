import User from "../schema/userSchema.js";

const getEditUserController = async (request, response) => {
  debugger;
  // console.log(request.params.id);
  try {
    const editUserget = await User.findById(request.params.id);
    response.status(200).json(editUserget);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export default getEditUserController;
