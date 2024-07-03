import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getMissionId, getMissionIdAtFirst } from "./missions.sql.js";

export const getMemberMissionDAO = async (cursorId, size, userId) => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [missions] = await pool.query(getMissionIdAtFirst, [parseInt(userId), parseInt(size)]);
            conn.release();
            return missions;

        }else{
            const [missions] = await pool.query(getMissionId, [parseInt(userId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return missions;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}