import TeamForm from "../../components/TeamForm/TeamForm";
import useTeamForm from "../../hooks/useTeamForm";
import { TeamWithoutId } from "../../types";

const AddNewTeamPage: React.FC = () => {
  const { createTeam } = useTeamForm();

  const sendTeamDataToApiRest = async (teamData: TeamWithoutId) => {
    await createTeam(teamData);
  };

  return (
    <>
      <h1 className="page-title">Add new team</h1>
      <TeamForm submitTeamData={sendTeamDataToApiRest} />
    </>
  );
};

export default AddNewTeamPage;
