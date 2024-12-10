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
        <label htmlFor="ridersNames">Riders names</label>
        <input
          className="team-form__input"
          type="text"
          id="ridersNames"
          required
        />
        <span className="team-form__details">
          Please provide two names, separated by a comma (e.g., Marc Marquez,
          Francesco Bagnaia).
        </span>
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
      <div className="team-form__info">
        <label htmlFor="isOfficialTeam">Is it a Official Team?</label>
        <div className="team-form__official-team">
          <input
            className="team-form__input team-form__checkbox"
            type="checkbox"
            id="isOfficialTeam"
            required
          />
          <span>Yes / No</span>
        </div>
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
      <Button text={"Create team"} className="button__form" type="submit" />
    </form>
  );
};

export default TeamForm;
