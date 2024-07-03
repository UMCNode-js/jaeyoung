import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getUserID} from "./user.sql.js";
import { insertReviewSql } from "./review.sql.js";

// User 데이터 삽입
export const addReview = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(getUserID);

        if(confirm==null){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertReviewSql, [data.member_id,data.store_id,data.body, data.score]);

        conn.release();
        return result[0].insertReviewSql;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
export const getMyReview = async (cursorId, size, userId) => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [reviews] = await pool.query(getMyReviewByReviewIdAtFirst, [parseInt(userId), parseInt(size)]);
            conn.release();
            return reviews;

        }else{
            const [reviews] = await pool.query(getMyReviewByReviewId, [parseInt(userId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return reviews;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}