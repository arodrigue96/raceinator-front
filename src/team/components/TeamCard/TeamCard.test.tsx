import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { teamMock1 } from "../../mocks/teamsMock";
import TeamCard from "./TeamCard";

describe("Given the TeamCard component", () => {
  describe("When it receives a team with the name 'Aniol's team'", () => {
    test("Then it should show an image with 'The motorbikes of Aniol's team' alterantive text", () => {
      const expectedAltImageText = /The motorbikes of Aniol's team/i;

      render(
        <Provider store={store}>
          <TeamCard team={teamMock1} />
        </Provider>,
      );

      const teamCardAltImage = screen.getByAltText(expectedAltImageText);

      expect(teamCardAltImage).toBeInTheDocument();
    });

    test("Then it should show 'Aniol's team' inside a heading", () => {
      const expectedNameText = /Aniol's team/i;

      render(
        <Provider store={store}>
          <TeamCard team={teamMock1} />
        </Provider>,
      );

      const teamName = screen.getByRole("heading", {
        name: expectedNameText,
      });

      expect(teamName).toBeInTheDocument();
    });

    test("Then it should show 'Team riders' inside a heading", () => {
      const expectedNameText = /Team riders/i;

      render(
        <Provider store={store}>
          <TeamCard team={teamMock1} />
        </Provider>,
      );

      const teamRidersTitle = screen.getByRole("heading", {
        name: expectedNameText,
      });

      expect(teamRidersTitle).toBeInTheDocument();
    });

    test("Then it should show 'Aniol Rodriguez and 'Erik Riquelme' texts", () => {
      render(
        <Provider store={store}>
          <TeamCard team={teamMock1} />
        </Provider>,
      );

      const teamRider1 = screen.getByText(/Aniol Rodriguez/i);
      const teamRider2 = screen.getByText(/Erik Riquelme/i);

      expect(teamRider1).toBeInTheDocument();
      expect(teamRider2).toBeInTheDocument();
    });

    test("Then it should show a 'Delete' button", () => {
      const expectedButtonName = /Delete/i;

      render(
        <Provider store={store}>
          <TeamCard team={teamMock1} />
        </Provider>,
      );

      const button = screen.getByRole("button", {
        name: expectedButtonName,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
