import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import AppRouter from "./AppRouter";

describe("Given the AppRouter component", () => {
  describe("When it is rendered at '/home'", () => {
    test("Then it should show 'Teams' inside a heading", async () => {
      const teamsPage = "/home";
      const pageTitleText = /Teams/i;

      render(
        <MemoryRouter initialEntries={[teamsPage]}>
          <AppRouter />
        </MemoryRouter>,
      );
      const pageTitle = await screen.findByRole("heading", {
        name: pageTitleText,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
  describe("When it is rendered at '/home1'", () => {
    test("Then it should show 'Page not found' inside a heading", async () => {
      const badRoute = "/home1";
      const pageTitleText = /Page not found/i;

      render(
        <MemoryRouter initialEntries={[badRoute]}>
          <AppRouter />
        </MemoryRouter>,
      );
      const pageTitle = await screen.findByRole("heading", {
        name: pageTitleText,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });

  describe("When it is rendered at '/new-team'", () => {
    test("Then it should show 'Add new team' inside a heading", async () => {
      const addNewTeamPage = "/new-team";
      const pageTitleText = /Add new team/i;

      render(
        <MemoryRouter initialEntries={[addNewTeamPage]}>
          <AppRouter />
        </MemoryRouter>,
      );
      const pageTitle = await screen.findByRole("heading", {
        name: pageTitleText,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
