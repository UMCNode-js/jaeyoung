export const getMissionId = 
"SELECT mm.user_id, mm.id, mm.status,mm.mission_id, s.name,m.reward,m.deadline,m.mission_spec"
+ "FROM  member_mission mm JOIN mission m on m.id=mm.mission_id JOIN store s on m.store_id = s.id"
+ "WHERE mm.user_id = ? AND mm.status = Inprogress AND  mm.id <= ? "
+ "ORDER BY mm.id DESC LIMIT ? ;"

export const getMissionIdAtFirst = 
"SELECT mm.user_id, mm.id, mm.status,mm.mission_id, s.name,m.reward,m.deadline,m.mission_spec"
+ "FROM  member_mission mm JOIN mission m on m.id=mm.mission_id JOIN store s on m.store_id = s.id"
+ "WHERE mm.user_id = ? AND mm.status = Inprogress"
+ "ORDER BY mm.idDESC LIMIT ? ;"
