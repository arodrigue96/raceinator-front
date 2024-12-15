import { useState } from "react";
import { TeamFormData, TeamWithoutId } from "../types";
import TeamsClient from "../client/TeamsClient";

const useTeamForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [teamData, setTeamData] = useState<TeamFormData>({
    name: "",
    riderName1: "",
    riderName2: "",
    debutYear: 0,
    isOfficialTeam: false,
    championshipTitles: 0,
    imageUrl: "",
    altImageText: "",
    description: "",
  });

  const updateTeamData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTeamData((teamData) => ({
      ...teamData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleCheckBoxState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamData((teamData) => ({
      ...teamData,
      [event.target.id]: event.target.checked,
    }));
  };

  const isValidForm = () => {
    const {
      name,
      riderName1,
      riderName2,
      debutYear,
      imageUrl,
      altImageText,
      description,
    } = teamData;

    const isValid =
      name.length > 0 &&
      riderName1.length > 0 &&
      riderName2.length > 0 &&
      debutYear > 0 &&
      imageUrl.length > 0 &&
      altImageText.length > 0 &&
      description.length > 0;

    setIsButtonDisabled(!isValid);
  };

  const transformTeamFormData = (teamData: TeamFormData): TeamWithoutId => {
    const {
      riderName1,
      riderName2,
      altImageText,
      championshipTitles,
      debutYear,
      description,
      imageUrl,
      isOfficialTeam,
      name,
    } = teamData;

    return {
      name: name,
      ridersNames: [riderName1, riderName2],
      debutYear: debutYear,
      isOfficialTeam: isOfficialTeam,
      championshipTitles: championshipTitles,
      imageUrl: imageUrl,
      altImageText: altImageText,
      description: description,
    };
  };

  const createTeam = (teamData: TeamWithoutId) => {
    const teamsClient = new TeamsClient();

    const newTeam = teamsClient.createTeam(teamData);

    return newTeam;
  };

  return {
    teamData,
    updateTeamData,
    handleCheckBoxState,
    isValidForm,
    isButtonDisabled,
    transformTeamFormData,
    createTeam,
  };
};

export default useTeamForm;
