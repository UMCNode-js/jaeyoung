import { myReviewResponseDTO } from "../dtos/reviews.dto.js";
import { getMyReview } from "../models/reviews.dao.js";

export const getMyReview = async (userId, query) => {
    const {reviewId, size = 3} = query;
    return myReviewResponseDTO(await getMyReview(reviewId, size, userId));
}