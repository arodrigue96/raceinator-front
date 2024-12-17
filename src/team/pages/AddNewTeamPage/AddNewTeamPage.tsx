import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../store/hooks";
import { addNewTeamError } from "../../toasts/errors/errors";
import Loader from "../../../components/Loader/Loader";
import TeamForm from "../../components/TeamForm/TeamForm";
import { TeamWithoutId } from "../../types";
import { teamsPage } from "../../../router/routes";
import { createTeamFeedback } from "../../toasts/success/success";
import { displayLoading, hideLoading } from "../../../uiSlice";
import useTeams from "../../hooks/useTeams";
import useTeamForm from "../../components/TeamForm/hooks/useTeamForm";

const AddNewTeamPage: React.FC = () => {
  const { createTeam } = useTeamForm();
  const { isLoading } = useTeams();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const sendTeamDataToApiRest = async (teamData: TeamWithoutId) => {
    dispatch(displayLoading());

    try {
      await createTeam(teamData);

      dispatch(hideLoading());
      navigate(teamsPage);
      createTeamFeedback();
    } catch (error) {
      dispatch(hideLoading());
      addNewTeamError(error as Error);
    }
  };

  return (
    <>
      <h1 className="page-title">Add new team</h1>
      <TeamForm submitTeamData={sendTeamDataToApiRest} />
      {isLoading && <Loader message="Creating a team..." />}
    </>
  );
};

export default AddNewTeamPage;
