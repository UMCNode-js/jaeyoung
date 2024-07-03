import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { addReviewData  } from "../services/review.service.js";

export const storeReview = async (req, res, next) => {
    console.log("리뷰 작성을 요청하였습니다.");
    console.log("body:", req.body); 

    res.send(response(status.SUCCESS, await addReviewData (req.body)));
}

export const storeMissions = async (req, res, next) => {
    console.log("가게 미션 작성을 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트 용

    res.send(response(status.SUCCESS, await joinStoreMission(req.body)));
}
export const getmyReviewList = async (req, res, next) => {
    console.log("사용자 리뷰 목록을 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트 용


    return res.send(response(status.SUCCESS, await getMyReview(req.params.userId, req.query)));
}

