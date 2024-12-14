import { useState } from "react";
import { TeamFormData } from "../types";

const useTeamForm = () => {
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

  return {
    teamData,
    updateTeamData,
    handleCheckBoxState,
  };
};

export default useTeamForm;
