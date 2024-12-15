import { useEffect } from "react";
import Button from "../../../components/Button/Button";
import useTeamForm from "../../hooks/useTeamForm";
import "./TeamForm.css";

const TeamForm: React.FC = () => {
  const {
    teamData,
    updateTeamData,
    handleCheckBoxState,
    isButtonDisabled,
    isValidForm,
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

  useEffect(() => {
    isValidForm();
  }, [isValidForm]);

  return (
    <form className="team-form">
      <div className="team-form__info">
        <label htmlFor="name">Name</label>
        <input
          className="team-form__input"
          type="text"
          id="name"
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
          max={2025}
          id="debutYear"
          value={debutYear}
          onChange={updateTeamData}
          required
        />
      </div>
      <div className="team-form__info team-form__official-team">
        <label htmlFor="isOfficialTeam">Is it a Official Team?</label>
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
          type="url"
          id="imageUrl"
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
