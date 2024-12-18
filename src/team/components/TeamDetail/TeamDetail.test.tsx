import { render, screen } from "@testing-library/react";
import TeamDetail from "./TeamDetail";
import { teamMock1 } from "../../mocks/teamsMock";

describe("Given the TeamDetail component", () => {
  describe("When it receives 'Aniol's team' team", () => {
    test("Then it should show 'Aniol's team' inside a heading", () => {
      const expectedTitleText = /Aniol's team/i;

      render(<TeamDetail team={teamMock1} />);

      const title = screen.getByRole("heading", {
        name: expectedTitleText,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
