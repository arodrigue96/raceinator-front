import { useCallback, useState } from "react";
import TeamsClient from "../client/TeamsClient";
import { loadTeams } from "../slice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { loadingTeamError } from "../toasts/errors/errors";

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
