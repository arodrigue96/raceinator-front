import { Team } from "../../types";
import "./TeamDetail.css";

interface TeamDetailProps {
  team: Team;
}

const TeamDetail: React.FC<TeamDetailProps> = ({ team }) => {
  const {
    name,
    imageUrl,
    altImageText,
    isOfficialTeam,
    ridersNames,
    debutYear,
    description,
  } = team;

  const championshipTitles: number[] = Array(team.championshipTitles).fill(0);

  return (
    <article className="team-detail">
      <h1 className="page-title">{name}</h1>
      <img
        className="team-detail__image"
        src={imageUrl}
        alt={altImageText}
        width={480}
        height={304}
      />
      <div className="team-information">
        <div className="team-information__official-team">
          <h2>It is official team?</h2>
          {isOfficialTeam ? (
            <img
              src="/icons/official-team.svg"
              alt={`${name} is a official team`}
              width={24}
              height={24}
            />
          ) : (
            <img
              src="/icons/not-official-team.svg"
              alt={`${name} is not a official team`}
              width={24}
              height={24}
            />
          )}
        </div>
        <div className="team-information__container">
          <h2>Riders Names</h2>
          <div className="team-information__riders-name">
            <span>{ridersNames[0]}</span>
            <span>{ridersNames[1]}</span>
          </div>
        </div>
        <div className="team-information__container">
          <h2>Debut year</h2>
          <span>{debutYear}</span>
        </div>
        <div className="team-information__container">
          <h2>Championship titles</h2>
          {championshipTitles.length === 0 ? (
            <span>0</span>
          ) : (
            <ol className="team-information__championship-titles">
              {championshipTitles.map((_championshipTitle, position) => (
                <li key={championshipTitles.length - position}>
                  <img
                    src="/icons/championship-titles.svg"
                    alt={`${position + 1} championship titple`}
                    width={23}
                    height={23}
                  />
                </li>
              ))}
            </ol>
          )}
        </div>
        <div className="team-information__container">
          <h2>Description</h2>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default TeamDetail;
