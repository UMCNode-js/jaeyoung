import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { signinResponseDTO,MemberMissionAddDTO } from "../dtos/user.dto.js"
import { addMemberMission, addUser, getMemberMission, getUser, getUserPreferToUserID, setPrefer } from "../models/user.dao.js";

export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;

    const joinUserData = await addUser({
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    });

    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}

export const MemberMission = async (body) => {


    const addMemberMissionData = await addMemberMission({
        'member_id': body.member_id,
        'mission_id': body.mission_id,

    });

    if(addMemberMissionData == -1){
        throw new BaseError(status.MemberMission_ALREADY_EXIST);
    }
    return MemberMissionAddDTO(await getMemberMission(addMemberMissionData));
    
}