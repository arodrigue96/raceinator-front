import { render, screen } from "@testing-library/react";
import AddNewTeamPage from "./AddNewTeamPage";

describe("Given the AddNewTeamPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Add new team' inside a heading", () => {
      const expectedPageTitleText = /Add new team/i;

      render(<AddNewTeamPage />);

      const pageTitle = screen.getByRole("heading", {
        name: expectedPageTitleText,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
