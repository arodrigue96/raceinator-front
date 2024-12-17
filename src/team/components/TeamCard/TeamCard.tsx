import { displayLoading, hideLoading } from "../../../uiSlice";
import { useAppDispatch } from "../../../store/hooks";
import Button from "../../../components/Button/Button";
import { teamsClient } from "../../client/TeamsClient";
import useTeams from "../../hooks/useTeams";
import { deleteTeamError } from "../../toasts/errors/errors";
import { deleteTeamFeedback } from "../../toasts/success/success";
import { Team } from "../../types";
import "./TeamCard.css";

interface TeamCardProps {
  team: Team;
  loading?: "lazy" | "eager";
}

const TeamCard: React.FC<TeamCardProps> = ({ team, loading = "lazy" }) => {
  const { imageUrl, altImageText, name, ridersNames, _id } = team;
  const { fetchTeams } = useTeams();
  const dispatch = useAppDispatch();

  const deleteTeams = async () => {
    dispatch(displayLoading());

    try {
      await teamsClient.deleteTeam(_id);
      await fetchTeams();

      dispatch(hideLoading());

      deleteTeamFeedback();
    } catch (error) {
      dispatch(hideLoading());
      deleteTeamError(error as Error);
    }
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
