import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
      {teams.length > 0 && (
        <HelmetProvider>
          <Helmet>
            <link
              rel="preload"
              as="image"
              href={teams[0].imageUrl}
              fetchPriority="high"
            />
          </Helmet>
        </HelmetProvider>
      )}
      <h1 className="page-title">Teams</h1>
      {isLoading && <Loader />}
      <TeamsList teams={teams} />
    </>
  );
};

export default TeamsPage;
