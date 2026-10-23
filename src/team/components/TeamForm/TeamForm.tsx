import { useEffect } from "react";
import Button from "../../../components/Button/Button";
import { TeamWithoutId } from "../../types";
import "./TeamForm.css";
import useTeamForm from "./hooks/useTeamForm";

interface TeamFormProps {
  submitTeamData: (teamData: TeamWithoutId) => void;
}

const TeamForm: React.FC<TeamFormProps> = ({ submitTeamData }) => {
  const {
    teamData,
    updateTeamData,
    handleCheckBoxState,
    isButtonDisabled,
    isValidForm,
    transformTeamFormData,
  } = useTeamForm();

  const {
    name,
    riderName1,
    riderName2,
    debutYear,
    isOfficialTeam,
    championshipTitles,
    imageUrl,
    altImageText,
    description,
  } = teamData;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const teamWithoutId = transformTeamFormData(teamData);

    submitTeamData(teamWithoutId);
  };

  useEffect(() => {
    isValidForm();
  }, [isValidForm]);

  return (
    <form className="team-form" onSubmit={handleSubmit}>
      <div className="team-form__info">
        <label htmlFor="name">Name</label>
        <input
          className="team-form__input"
          type="text"
          id="name"
          minLength={2}
          maxLength={60}
          value={name}
          onChange={updateTeamData}
          required
        />
      </div>
      <div className="team-form__info">
        <span>Riders Names:</span>
        <div className="team-form__riders-name">
          <div className="team-form__info">
            <label htmlFor="riderName1">Rider name 1</label>
            <input
              className="team-form__input"
              type="text"
              id="riderName1"
          minLength={2}
              maxLength={60}
              value={riderName1}
              onChange={updateTeamData}
              required
            />
          </div>
          <div className="team-form__info">
            <label htmlFor="riderName2">Rider name 2</label>
            <input
              className="team-form__input"
              type="text"
              id="riderName2"
          minLength={2}
              maxLength={60}
              value={riderName2}
              onChange={updateTeamData}
              required
            />
          </div>
        </div>
      </div>
      <div className="team-form__info">
        <label htmlFor="debutYear">Debut year in MotoGP</label>
        <input
          className="team-form__input"
          type="number"
          min={1949}
          max={new Date().getFullYear()}
          id="debutYear"
          value={debutYear}
          onChange={updateTeamData}
          required
        />
      </div>
      <div className="team-form__info team-form__official-team">
        <label htmlFor="isOfficialTeam">Is it an official team?</label>
        <input
          className="team-form__input team-form__checkbox"
          type="checkbox"
          id="isOfficialTeam"
          checked={isOfficialTeam}
          onChange={handleCheckBoxState}
        />
      </div>
      <div className="team-form__info">
        <label htmlFor="championshipTitles">
          Number of Championship titles
        </label>
        <input
          className="team-form__input"
          type="number"
          min={0}
          max={99}
          step={1}
          id="championshipTitles"
          value={championshipTitles}
          onChange={updateTeamData}
          required
        />
      </div>
      <div className="team-form__info">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          className="team-form__input"
          type="text"
          id="imageUrl"
          maxLength={500}
          pattern="https://.+|/images/teams/[a-z0-9\-]+\.webp"
          value={imageUrl}
          onChange={updateTeamData}
          required
        />
      </div>
      <div className="team-form__info">
        <label htmlFor="altImageText">Alternative Text</label>
        <input
          className="team-form__input"
          type="text"
          id="altImageText"
          minLength={2}
          maxLength={150}
          value={altImageText}
          onChange={updateTeamData}
          required
        />
      </div>
      <div className="team-form__info">
        <label htmlFor="description">Description</label>
        <textarea
          className="team-form__input team-form__description"
          id="description"
          minLength={10}
          maxLength={1000}
          value={description}
          onChange={updateTeamData}
          required
        ></textarea>
      </div>
      <Button
        children="Create team"
        className="button__form"
        type="submit"
        disabled={isButtonDisabled}
      />
    </form>
  );
};

export default TeamForm;
