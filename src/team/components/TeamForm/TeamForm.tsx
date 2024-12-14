import Button from "../../../components/Button/Button";
import "./TeamForm.css";

const TeamForm: React.FC = () => {
  return (
    <form className="team-form">
      <div className="team-form__info">
        <label htmlFor="name">Name</label>
        <input className="team-form__input" type="text" id="name" required />
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
              required
            />
          </div>
          <div className="team-form__info">
            <label htmlFor="riderName2">Rider name 2</label>
            <input
              className="team-form__input"
              type="text"
              id="riderName2"
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
          required
        />
      </div>
      <div className="team-form__info team-form__official-team">
        <label htmlFor="isOfficialTeam">Is it a Official Team?</label>
        <input
          className="team-form__input team-form__checkbox"
          type="checkbox"
          id="isOfficialTeam"
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
          required
        />
      </div>
      <div className="team-form__info">
        <label htmlFor="imageUrl">Image URL</label>
        <input className="team-form__input" type="url" id="imageUrl" required />
      </div>
      <div className="team-form__info">
        <label htmlFor="altImageText">Alternative Text</label>
        <input
          className="team-form__input"
          type="text"
          id="altImageText"
          required
        />
      </div>
      <div className="team-form__info">
        <label htmlFor="description">Description</label>
        <textarea
          className="team-form__input team-form__description"
          id="description"
          required
        ></textarea>
      </div>
      <Button
        children="Create team"
        className="button__form"
        type="submit"
        disabled
      />
    </form>
  );
};

export default TeamForm;
