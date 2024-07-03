export const insertReviewSql = "INSERT INTO user (memeber_id,store_id,body,score) VALUES (?, ?, ?, ?);";
export const getMyReviewByReviewId = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE r.user_id = ? AND r.review_id <= ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getMyReviewByReviewIdAtFirst = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE r.user_id = ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"
