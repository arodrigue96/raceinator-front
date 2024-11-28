import { render, screen } from "@testing-library/react";
import TeamsPage from "./TeamsPage";

describe("Given the TeamsPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Teams' inside a heading", () => {
      const titleText = /teams/i;

      render(<TeamsPage />);

      const pageTitle = screen.getByRole("heading", {
        name: titleText,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
