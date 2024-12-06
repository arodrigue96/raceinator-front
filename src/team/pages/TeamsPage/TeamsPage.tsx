import { useEffect, useState } from "react";
import TeamsClient from "../../client/TeamsClient";
import { Team } from "../../types";
import TeamsList from "../../components/TeamsList/TeamsList";

const TeamsPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const teamsData = await new TeamsClient().getTeams();
      setTeams(teamsData);
    };

    fetchTeams();
  }, []);

  return (
    <>
      <h1 className="page-title">Teams</h1>
      <TeamsList teams={teams} />
    </>
  );
};

export default TeamsPage;
