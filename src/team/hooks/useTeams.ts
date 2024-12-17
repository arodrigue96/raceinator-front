import { useCallback } from "react";
import TeamsClient from "../client/TeamsClient";
import { loadTeams } from "../slice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { loadingTeamError } from "../toasts/errors/errors";
import { displayLoading, hideLoading } from "../../uiSlice";

const useTeams = () => {
  const teams = useAppSelector((state) => state.teamsState.teams);
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  const dispatch = useAppDispatch();

  const fetchTeams = useCallback(async () => {
    dispatch(displayLoading());

    try {
      const teamsData = await new TeamsClient().getTeams();
      dispatch(loadTeams(teamsData));

      dispatch(hideLoading());
    } catch {
      dispatch(hideLoading());
      loadingTeamError();
    }
  }, [dispatch]);

  return {
    teams,
    fetchTeams,
    isLoading,
  };
};

export default useTeams;
