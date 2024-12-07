import { useEffect, useState } from "react";
import TeamsClient from "../../client/TeamsClient";
import { Team } from "../../types";
import TeamsList from "../../components/TeamsList/TeamsList";
import Loader from "../../../components/Loader/Loader";
import loadingTeamError from "../../../components/Toasts/LoadingTeamError/LoadingTeamError";

const TeamsPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTeams = async () => {
      setIsLoading(true);

      try {
        const teamsData = await new TeamsClient().getTeams();
        setTeams(teamsData);

        setIsLoading(false);
      } catch {
        setIsLoading(false);
        loadingTeamError();
      }
    };

    fetchTeams();
  }, []);

  return (
    <>
      <h1 className="page-title">Teams</h1>
      {isLoading && <Loader />}
      <TeamsList teams={teams} />
    </>
  );
};

export default TeamsPage;
