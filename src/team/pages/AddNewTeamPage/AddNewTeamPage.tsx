import { useState } from "react";
import TeamForm from "../../components/TeamForm/TeamForm";
import useTeamForm from "../../hooks/useTeamForm";
import { addNewTeamError } from "../../toasts/errors/errors";
import { TeamWithoutId } from "../../types";
import Loader from "../../../components/Loader/Loader";
import { useNavigate } from "react-router";
import { teamsPage } from "../../../router/routes";
import { createTeamFeedback } from "../../toasts/success/success";

const AddNewTeamPage: React.FC = () => {
  const { createTeam } = useTeamForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const sendTeamDataToApiRest = async (teamData: TeamWithoutId) => {
    setIsLoading(true);

    try {
      await createTeam(teamData);

      setIsLoading(false);
      navigate(teamsPage);
      createTeamFeedback();
    } catch (error) {
      setIsLoading(false);
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
