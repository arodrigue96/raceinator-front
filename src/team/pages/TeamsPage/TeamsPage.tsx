import { useEffect, useState } from "react";
import TeamsClient from "../../client/TeamsClient";
import { Team } from "../../types";
import TeamsList from "../../components/TeamsList/TeamsList";
import Loader from "../../../components/Loader/Loader";

const TeamsPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTeams = async () => {
      setIsLoading(true);

      const teamsData = await new TeamsClient().getTeams();
      setTeams(teamsData);

      setIsLoading(false);
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
