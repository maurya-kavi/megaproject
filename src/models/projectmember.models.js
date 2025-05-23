import mongoose, {Schema} from "mongoose";
import { AvailableUserRoles , UserRolesEnum } from "../utils/constants";
const projectMemberSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    project:{
        type:Schema.Types.ObjectId,
        ref:"Project",
        required:true,
    },
    role:{
        type:String,
        enum:AvailableUserRoles,
        default:UserRolesEnum.MEMBER,

    },
}, {timestamps:true});

export const ProjectMember = mongoose.model("ProjectMember" , projectMemberSchema);