import { Team } from "../../team/types";
import "./TeamCard.css";

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const { name } = team;

  return (
    <article className="team-card">
      <h2 className="team-card__name">{name}</h2>
    </article>
  );
};

export default TeamCard;
