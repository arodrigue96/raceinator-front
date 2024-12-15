import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import TeamForm from "./TeamForm";

describe("Given the TeamForm component", () => {
  const user = userEvent.setup();

  const mockFunction = vi.fn();

  describe("When it's rendered", () => {
    test("Then it should show 'Name', 'Rider name 1', 'Rider name 2', 'Debut year in MotoGP', 'Is it a Official Team', 'Number of Championship titles', 'Image URL', 'Alternative Text' and 'Description' fields", () => {
      render(<TeamForm submitTeamData={mockFunction} />);

      const nameField = screen.getByLabelText("Name");
      const riderName1Field = screen.getByLabelText(/rider name 1/i);
      const riderName2Field = screen.getByLabelText(/rider name 2/i);
      const debutYearField = screen.getByLabelText(/debut year in motogp/i);
      const isOfficialTeamField = screen.getByLabelText(
        /is it a official team?/i,
      );
      const championshipTitlesField = screen.getByLabelText(
        /number of championship titles/i,
      );
      const imageUrlField = screen.getByLabelText(/image url/i);
      const altTextField = screen.getByLabelText(/alternative text/i);
      const descriptionField = screen.getByLabelText(/description/i);

      expect(nameField).toBeInTheDocument();
      expect(riderName1Field).toBeInTheDocument();
      expect(riderName2Field).toBeInTheDocument();
      expect(debutYearField).toBeInTheDocument();
      expect(isOfficialTeamField).toBeInTheDocument();
      expect(championshipTitlesField).toBeInTheDocument();
      expect(imageUrlField).toBeInTheDocument();
      expect(altTextField).toBeInTheDocument();
      expect(descriptionField).toBeInTheDocument();
    });

    test("Then it should show a disabled 'Create Team' button", () => {
      const buttonText = /create team/i;

      render(<TeamForm submitTeamData={mockFunction} />);

      const createTeamButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(createTeamButton).toBeInTheDocument();
      expect(createTeamButton).toBeDisabled();
    });
  });

  describe("When the user fills the 'Name' field with 'Aniol's team'", () => {
    test("Then it should show 'Aniol's team' inside the Name field", async () => {
      const expectedNameFieldText = "Aniol's team";

      render(<TeamForm submitTeamData={mockFunction} />);

      const nameField = screen.getByLabelText("Name");
      await user.type(nameField, expectedNameFieldText);

      expect(nameField).toHaveValue(expectedNameFieldText);
    });
  });

  describe("When the user fills all the fields", () => {
    test("Then the 'Create team' button should be enabled", async () => {
      render(<TeamForm submitTeamData={mockFunction} />);

      const nameField = screen.getByLabelText("Name");
      const riderName1Field = screen.getByLabelText(/rider name 1/i);
      const riderName2Field = screen.getByLabelText(/rider name 2/i);
      const debutYearField = screen.getByLabelText(/debut year in motogp/i);
      const isOfficialTeamField = screen.getByLabelText(
        /is it a official team?/i,
      );
      const championshipTitlesField = screen.getByLabelText(
        /number of championship titles/i,
      );
      const imageUrlField = screen.getByLabelText(/image url/i);
      const altTextField = screen.getByLabelText(/alternative text/i);
      const descriptionField = screen.getByLabelText(/description/i);

      const createTeamButton = screen.getByRole("button", {
        name: /create team/i,
      });

      expect(createTeamButton).toBeDisabled();

      await user.type(nameField, "Aniol's team");
      await user.type(riderName1Field, "Aniol Rodriguez");
      await user.type(riderName2Field, "Erik Riquelme");
      await user.type(debutYearField, "1996");
      await user.click(isOfficialTeamField);
      await user.type(championshipTitlesField, "0");
      await user.type(imageUrlField, "https://google.com");
      await user.type(altTextField, "Aniol's team");
      await user.type(descriptionField, "Aniol will have a team one day");

      expect(createTeamButton).toBeEnabled();
    });
  });
});
