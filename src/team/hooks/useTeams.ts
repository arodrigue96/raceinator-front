import { useCallback } from "react";
import { loadTeams } from "../slice/teamsSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { loadTeamsError, resetTeamsError } from "../toasts/errors/errors";
import { displayLoading, hideLoading } from "../../uiSlice";
import { resetTeamsFeedback } from "../toasts/success/success";
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

  const resetTeams = useCallback(async () => {
    dispatch(displayLoading());

    try {
      const teamsData = await teamsClient.resetTeams();
      dispatch(loadTeams(teamsData));

      dispatch(hideLoading());
      resetTeamsFeedback();
    } catch {
      dispatch(hideLoading());
      resetTeamsError();
    }
  }, [dispatch]);

  return {
    teams,
    fetchTeams,
    resetTeams,
    isLoading,
  };
};

export default useTeams;
