import Button from "../../../components/Button/Button";
import TeamsClient from "../../client/TeamsClient";
import useTeams from "../../hooks/useTeams";
import { Team } from "../../types";
import "./TeamCard.css";

interface TeamCardProps {
  team: Team;
  loading?: "lazy" | "eager";
}

const TeamCard: React.FC<TeamCardProps> = ({ team, loading = "lazy" }) => {
  const { imageUrl, altImageText, name, ridersNames, _id } = team;
  const { fetchTeams } = useTeams();

  const deleteTeams = async () => {
    await new TeamsClient().deleteTeam(_id);
    await fetchTeams();
  };

  return (
    <article className="team-card">
      <img
        className="team-card__image"
        src={imageUrl}
        alt={altImageText}
        width={447}
        height={327}
        loading={loading}
      />
      <div className="team-card__information">
        <h2 className="team-card__name">{name}</h2>
        <div className="team-card__riders">
          <h3 className="team-card__riders-title">Team riders</h3>
          <span>{ridersNames[0]}</span>
          <span>{ridersNames[1]}</span>
        </div>
        <div className="button__container">
          <Button children="Delete" onClick={deleteTeams} />
        </div>
      </div>
    </article>
  );
};

export default TeamCard;
