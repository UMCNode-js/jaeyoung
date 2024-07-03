import { getChallengeMissionResponseDTO } from "../dtos/mission.dto.js";
import { getMemberMissionDAO } from "../models/mission.dao.js";

export const getMemberMissions = async (userId, query) => {
    const {missionId, size = 3} = query;
    return getChallengeMissionResponseDTO(await getMemberMissionDAO(missionId, size, userId));
}