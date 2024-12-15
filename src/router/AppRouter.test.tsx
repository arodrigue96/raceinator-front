import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../team/store";
import { server } from "../mocks/node";
import { apiRestUrl } from "../team/client/TeamsClient";
import { addNewTeamPage, notFoundPage, teamsPage } from "./routes";
import AppRouter from "./AppRouter";
import { teamMock1 } from "../team/mocks/teamsMock";
import { Team } from "../team/types";

describe("Given the AppRouter component", () => {
  const user = userEvent.setup();

  const submitForm = async () => {
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

    await user.type(nameField, "Aniol's team");
    await user.type(riderName1Field, "Aniol Rodriguez");
    await user.type(riderName2Field, "Erik Riquelme");
    await user.type(debutYearField, "1996");
    await user.click(isOfficialTeamField);
    await user.type(championshipTitlesField, "0");
    await user.type(imageUrlField, "https://google.com");
    await user.type(altTextField, "Aniol's team");
    await user.type(descriptionField, "Aniol will have a team one day");
    await user.click(createTeamButton);
  };

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

    describe("And the user submit the form with the team name 'Aniol's team' and this team already exists", () => {
      test("Then it should show a toast with the message: 'A team with Aniol's name already exists'", async () => {
        server.use(
          http.post(`${apiRestUrl}/teams`, () => {
            return HttpResponse.json(
              {
                message: "A team with this name already exists",
              },
              { status: 409 },
            );
          }),
        );
        const toastText = "A team with Aniol's team name already exists";

        render(
          <MemoryRouter initialEntries={[addNewTeamPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        submitForm();

        const toast = await screen.findByText(toastText);

        expect(toast).toBeInTheDocument();
      });
    });

    describe("And the user submit the form with the team name 'Aniol's team' and there is a network error", () => {
      test("Then it should show a toast with the message: 'Failed to add a new team'", async () => {
        server.use(
          http.post(`${apiRestUrl}/teams`, () => {
            return HttpResponse.error();
          }),
        );
        const toastText = "Failed to add a new team";

        render(
          <MemoryRouter initialEntries={[addNewTeamPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        submitForm();

        const toast = await screen.findByText(toastText);

        expect(toast).toBeInTheDocument();
      });
    });

    describe("And the user submit the form with the team name 'Aniol's team'", () => {
      test("Then it should show a toast with the message: 'Team created'", async () => {
        const expectedToastMessage = /Team created/i;

        server.use(
          http.post(`${apiRestUrl}/teams`, () => {
            return HttpResponse.json<{ teams: Team }>({
              teams: teamMock1,
            });
          }),
        );

        render(
          <MemoryRouter initialEntries={[addNewTeamPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        submitForm();

        const toast = await screen.findByText(expectedToastMessage);

        expect(toast).toBeInTheDocument();
      });

      test("Then it should navigate to '/home'", async () => {
        const expectedPageTitle = /Teams/i;

        server.use(
          http.post(`${apiRestUrl}/teams`, () => {
            return HttpResponse.json<{ teams: Team }>({
              teams: teamMock1,
            });
          }),
        );

        render(
          <MemoryRouter initialEntries={[addNewTeamPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        submitForm();

        const pageTitle = await screen.findByRole("heading", {
          name: expectedPageTitle,
        });

        expect(pageTitle).toBeInTheDocument();
      });
    });
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
