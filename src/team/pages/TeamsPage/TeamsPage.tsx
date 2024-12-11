import TeamsList from "../../components/TeamsList/TeamsList";
import Loader from "../../../components/Loader/Loader";
import useTeams from "../../hooks/useTeams";
import { useEffect } from "react";

const TeamsPage: React.FC = () => {
  const { teams, isLoading, fetchTeams } = useTeams();

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  return (
    <>
      <h1 className="page-title">Teams</h1>
      {isLoading && <Loader />}
      <TeamsList teams={teams} />
    </>
  );
};

export default TeamsPage;
