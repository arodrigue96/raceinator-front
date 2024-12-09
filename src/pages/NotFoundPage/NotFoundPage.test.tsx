import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";
import { MemoryRouter } from "react-router";

describe("Given the NotFoundPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Page not found' inside a heading", () => {
      const notFoundPageTitleText = /page not found/i;

      render(
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>,
      );

      const notFoundPageTitle = screen.getByRole("heading", {
        name: notFoundPageTitleText,
      });

      expect(notFoundPageTitle).toBeInTheDocument();
    });

    test("Then it should show 'Go to home page' link", () => {
      const homeLinkText = /Go to home page/i;

      render(
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>,
      );

      const homeLink = screen.getByRole("link", {
        name: homeLinkText,
      });

      expect(homeLink).toBeInTheDocument();
    });
  });
});
