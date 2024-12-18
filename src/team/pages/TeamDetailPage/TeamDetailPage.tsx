import { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import TeamDetail from "../../components/TeamDetail/TeamDetail";
import { teamsClient } from "../../client/TeamsClient";
import { loadTeam } from "../../slice";
import { displayLoading, hideLoading } from "../../../uiSlice";
import { loadTeamDetailError } from "../../toasts/errors/errors";
import Loader from "../../../components/Loader/Loader";

const TeamDetailPage: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const team = useAppSelector((state) => state.teamsState.team);
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  const dispatch = useAppDispatch();

  const fetchTeam = useCallback(async () => {
    dispatch(displayLoading());
    try {
      const fetchTeam = await teamsClient.getTeamById(teamId as string);
      dispatch(loadTeam(fetchTeam));

      dispatch(hideLoading());
    } catch {
      dispatch(hideLoading());
      loadTeamDetailError();
    }
  }, [dispatch, teamId]);

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  return (
    <>
      {isLoading && <Loader />}
      <TeamDetail team={team} />
    </>
  );
};

export default TeamDetailPage;
