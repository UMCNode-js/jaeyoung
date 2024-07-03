import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { reviewAddDTO } from "../dtos/review.dto.js"
import { addReview } from "../models/review.dao.js";

export const addReviewData = async (body) => {

    const addReviewData = await addReview({
        "member_id" : body.member_id,
        "store_id" : body.store_id,
        "body" : body.body,
        "score" : body.score
    });

    if(addReviewData == -1){
        throw new BaseError(status.REVIEW_ALREADY_EXIST);
    }else{
        return reviewAddDTO(await addReview(pushReviewData));
    }
}