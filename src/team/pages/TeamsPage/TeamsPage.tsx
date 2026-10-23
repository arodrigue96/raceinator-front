import "./TeamsPage.css";
import { useEffect } from "react";
import TeamsList from "../../components/TeamsList/TeamsList";
import Loader from "../../../components/Loader/Loader";
import Button from "../../../components/Button/Button";
import useTeams from "../../hooks/useTeams";

const TeamsPage: React.FC = () => {
  const { teams, fetchTeams, resetTeams, isLoading } = useTeams();

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  return (
    <>
      <h1 className="page-title">Teams</h1>
      {isLoading && <Loader />}
      <Button className="button__restore" type="button" onClick={resetTeams}>
        Restore teams
      </Button>
      <TeamsList teams={teams} />
    </>
  );
};

export default TeamsPage;
