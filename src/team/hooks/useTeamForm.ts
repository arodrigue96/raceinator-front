import { useState } from "react";
import { TeamFormData } from "../types";

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

  return {
    teamData,
    updateTeamData,
    handleCheckBoxState,
    isValidForm,
    isButtonDisabled,
  };
};

export default useTeamForm;
