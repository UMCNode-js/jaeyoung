import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinUser } from "../services/user.service.js";

export const userSignin = async (req, res, next) => {
    console.log("회원가입을 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinUser(req.body)));
}
export const ChallengeMissions = async (req, res, next) => {
    console.log("가게의 미션을 도전 중인 미션 추가를 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트 용

    res.send(response(status.SUCCESS, await addMemberMission(req.body)));
}
