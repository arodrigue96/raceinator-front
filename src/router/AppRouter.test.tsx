import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { http } from "msw";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../team/store";
import { server } from "../mocks/node";
import { apiRestUrl } from "../team/client/TeamsClient";
import { addNewTeamPage, notFoundPage, teamsPage } from "./routes";
import AppRouter from "./AppRouter";

describe("Given the AppRouter component", () => {
  const user = userEvent.setup();

  describe("When it is rendered at '/home'", () => {
    test("Then it should show 'Teams' inside a heading", async () => {
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

    describe("And when the user clicks to 'Add new team' link", () => {
      test("Then it should show 'Add new team' inside a heading", async () => {
        const pageTitleText = /Add new team/i;

        render(
          <MemoryRouter initialEntries={[teamsPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        const addNewTeamLink = await screen.findByRole("link", {
          name: /Add new team/i,
        });

        await user.click(addNewTeamLink);

        const pageTitle = await screen.findByRole("heading", {
          name: pageTitleText,
        });

        expect(pageTitle).toBeInTheDocument();
      });
    });

    describe("And when the client throws an error with 'Failed to load teams'", () => {
      test("Then it should show a toast with the message 'Failed to load teams", async () => {
        const toastText = /Failed to load teams/i;

        server.use(
          http.get(`${apiRestUrl}/teams`, () => {
            throw new Error("Failed to load teams");
          }),
        );

        render(
          <MemoryRouter initialEntries={[teamsPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        const toast = await screen.findByText(toastText);

        expect(toast).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered at '/home1'", () => {
    test("Then it should show 'Page not found' inside a heading", async () => {
      const pageTitleText = /Page not found/i;

      render(
        <MemoryRouter initialEntries={[notFoundPage]}>
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

    describe("And when the user clicks to 'Go Back Home' link'", () => {
      test("Then it should show 'Teams' inside a heading", async () => {
        const linkText = /Go Back Home/i;
        const pageTitleText = /Teams/i;

        render(
          <MemoryRouter initialEntries={[notFoundPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        const goBackHomeLink = await screen.findByRole("link", {
          name: linkText,
        });

        await user.click(goBackHomeLink);

        const pageTitle = await screen.findByRole("heading", {
          name: pageTitleText,
        });

        expect(pageTitle).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered at '/new-team'", () => {
    test("Then it should show 'Add new team' inside a heading", async () => {
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

    describe("And when the user clicks 'Home' link'", () => {
      test("Then it should show 'Teams' inside a heading", async () => {
        const linkText = /Home/i;
        const pageTitleText = /Teams/i;

        render(
          <MemoryRouter initialEntries={[addNewTeamPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        const homeLink = await screen.findByRole("link", {
          name: linkText,
        });

        await user.click(homeLink);

        const pageTitle = await screen.findByRole("heading", {
          name: pageTitleText,
        });

        expect(pageTitle).toBeInTheDocument();
      });
    });
  });
});
