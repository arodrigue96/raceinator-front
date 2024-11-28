import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";
import { MemoryRouter } from "react-router-dom";

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

    test("Then it should show a 'This page doesn't exist. Not to worry, it happens to even the best riders & teams.' text.", () => {
      const expectedText =
        "This page doesn't exist. Not to worry, it happens to even the best riders & teams.";

      render(
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>,
      );
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    test("Then it should show 'Go Back Home' link", () => {
      const homeLinkText = /go back home/i;

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
