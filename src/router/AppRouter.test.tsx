import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "../team/store";

describe("Given the AppRouter component", () => {
  describe("When it is rendered at '/home'", () => {
    test("Then it should show 'Teams' inside a heading", async () => {
      const teamsPage = "/home";
      const pageTitleText = /Teams/i;

      render(
        <MemoryRouter initialEntries={[teamsPage]}>
          <Provider store={store}>
            <AppRouter />
          </Provider>
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
          <Provider store={store}>
            <AppRouter />
          </Provider>
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
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </MemoryRouter>,
      );

      const pageTitle = await screen.findByRole("heading", {
        name: pageTitleText,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
