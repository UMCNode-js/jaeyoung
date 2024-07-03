
import { getChallengeMissionList } from "../controllers/mission.controller.js";

export const memberMissionsRouter = express.Router({mergeParams: true});

memberMissionsRouter.get('/:userId', asyncHandler(getChallengeMissionList));