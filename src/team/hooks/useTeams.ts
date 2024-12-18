import { useCallback } from "react";
import { loadTeams } from "../slice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { loadTeamsError } from "../toasts/errors/errors";
import { displayLoading, hideLoading } from "../../uiSlice";
import { teamsClient } from "../client/TeamsClient";

const useTeams = () => {
  const teams = useAppSelector((state) => state.teamsState.teams);
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  const dispatch = useAppDispatch();

  const fetchTeams = useCallback(async () => {
    dispatch(displayLoading());

    try {
      const teamsData = await teamsClient.getTeams();
      dispatch(loadTeams(teamsData));

      dispatch(hideLoading());
    } catch {
      dispatch(hideLoading());
      loadTeamsError();
    }
  }, [dispatch]);

  return {
    teams,
    fetchTeams,
    isLoading,
  };
};

export default useTeams;
