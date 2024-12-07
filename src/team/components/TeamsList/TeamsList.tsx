import { Team } from "../../types";
import TeamCard from "../TeamCard/TeamCard";
import "./TeamsList.css";

interface TeamsListProps {
  teams: Team[];
}

const TeamsList: React.FC<TeamsListProps> = ({ teams }) => {
  return (
    <>
      {teams.length > 0 && (
        <link
          rel="preload"
          as="image"
          href={teams[0].imageUrl}
          fetchPriority="high"
        />
      )}
      <ul className="teams-list">
        {teams.map((team) => (
          <li key={team._id}>
            <TeamCard team={team} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeamsList;
