import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import TeamDetail from "../../components/TeamDetail/TeamDetail";
import { teamsClient } from "../../client/TeamsClient";
import { displayLoading, hideLoading } from "../../../uiSlice";
import { loadTeamDetailError } from "../../toasts/errors/errors";
import Loader from "../../../components/Loader/Loader";
import { notFoundPage } from "../../../router/routes";
import { loadTeam } from "../../slice/teamsSlice";

const TeamDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const team = useAppSelector((state) => state.teamsState.team);
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  const { teamId } = useParams<{ teamId: string }>();

  const fetchTeam = useCallback(async () => {
    dispatch(displayLoading());

    scroll(0, 0);

    try {
      const fetchTeam = await teamsClient.getTeamById(teamId as string);

      dispatch(loadTeam(fetchTeam));
      dispatch(hideLoading());
    } catch {
      dispatch(hideLoading());
      loadTeamDetailError();

      navigate(notFoundPage);
    }
  }, [dispatch, navigate, teamId]);

  useEffect(() => {
    if (teamId) {
      fetchTeam();
    }

    return () => {
      dispatch(loadTeam(null));
    };
  }, [dispatch, fetchTeam, teamId]);

  return (
    <>
      {isLoading && <Loader />}
      {team && <TeamDetail team={team} />}
    </>
  );
};

export default TeamDetailPage;
