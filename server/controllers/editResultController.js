import User from "../schema/userSchema.js";

const editResultController = async(request, response)=>{
    let editUserResult = request.body;
    const newEditUserResult = new User(editUserResult);

    try {
        await User.updateOne({_id:request.params.id},editUserResult);
        response.status(201).json(newEditUserResult);
    } catch (error) {
        response.status(409).json({message:error.message});
        console.log("Please check the request or schema or api... Something went wrong", error);
    }
}

export default editResultController