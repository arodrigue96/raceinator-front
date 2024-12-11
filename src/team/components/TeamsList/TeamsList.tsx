import { Team } from "../../types";
import TeamCard from "../TeamCard/TeamCard";
import "./TeamsList.css";

interface TeamsListProps {
  teams: Team[];
}

const TeamsList: React.FC<TeamsListProps> = ({ teams }) => {
  return (
    <ul className="teams-list">
      {teams.map((team, position) => (
        <li key={team._id}>
          <TeamCard team={team} loading={position === 0 ? "eager" : "lazy"} />
        </li>
      ))}
    </ul>
  );
};

export default TeamsList;
