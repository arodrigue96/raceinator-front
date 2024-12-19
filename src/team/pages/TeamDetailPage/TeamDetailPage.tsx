import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import TeamDetail from "../../components/TeamDetail/TeamDetail";
import { teamsClient } from "../../client/TeamsClient";
import { displayLoading, hideLoading } from "../../../uiSlice";
import { loadTeamDetailError } from "../../toasts/errors/errors";
import Loader from "../../../components/Loader/Loader";
import { notFoundPage } from "../../../router/routes";
import { Team } from "../../types";

const TeamDetailPage: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const navigate = useNavigate();
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  const [team, setTeam] = useState<Team>({
    _id: "",
    name: "",
    ridersNames: [],
    debutYear: 0,
    isOfficialTeam: true,
    championshipTitles: 0,
    imageUrl: "",
    altImageText: "",
    description: "",
  });

  const dispatch = useAppDispatch();

  const fetchTeam = useCallback(async () => {
    dispatch(displayLoading());

    scroll(0, 0);

    try {
      const fetchTeam = await teamsClient.getTeamById(teamId as string);
      setTeam(fetchTeam);

      dispatch(hideLoading());
    } catch {
      dispatch(hideLoading());
      loadTeamDetailError();

      navigate(notFoundPage);
    }
  }, [dispatch, navigate, teamId]);

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
