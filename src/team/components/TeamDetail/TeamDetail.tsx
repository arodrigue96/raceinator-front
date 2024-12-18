import { Team } from "../../types";

interface TeamDetailProps {
  team: Team;
}

const TeamDetail: React.FC<TeamDetailProps> = ({ team }) => {
  return (
    <article className="team-detail">
      <h1 className="page-title">{team.name}</h1>
    </article>
  );
};

export default TeamDetail;
