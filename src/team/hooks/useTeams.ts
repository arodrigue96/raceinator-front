import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import loadingTeamError from "../../components/Toasts/LoadingTeamError/LoadingTeamError";
import TeamsClient from "../client/TeamsClient";
import { loadTeams } from "../slice";

const useTeams = () => {
  const [isLoading, setIsLoading] = useState(false);

  const teams = useAppSelector((state) => state.teamsState.teams);
  const dispatch = useAppDispatch();

  const fetchTeams = useCallback(async () => {
    setIsLoading(true);

    try {
      const teamsData = await new TeamsClient().getTeams();
      dispatch(loadTeams(teamsData));

      setIsLoading(false);
    } catch {
      setIsLoading(false);
      loadingTeamError();
    }
  }, [dispatch]);

  return {
    teams,
    isLoading,
    fetchTeams,
  };
};

export default useTeams;
