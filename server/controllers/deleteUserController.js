import User from "../schema/userSchema";

const deleteUser = async(request,response)=>{
    try {
        await User.deleteOne({_id:request.params.id})
        
    } catch (error) {
        console.log("Something went wrong",error);
        response.status(409).json({ message: error.message });
    }
}
export default deleteUser