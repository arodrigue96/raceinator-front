import { useEffect, useState } from "react";
import TeamsList from "../../../components/TeamsList/TeamsList";
import TeamsClient from "../../client/TeamsClient";
import { Team } from "../../types";

const TeamsPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamsData = await new TeamsClient().getTeams();
        setTeams(teamsData);
      } catch (error) {
        console.log("Error to fetch Teams:", error);
      }
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
