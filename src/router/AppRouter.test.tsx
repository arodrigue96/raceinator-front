import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../store";
import { server } from "../mocks/node";
import { apiRestUrl } from "../team/client/TeamsClient";
import {
  addNewTeamPage,
  notFoundPage,
  teamDetailPage,
  teamsPage,
} from "./routes";
import AppRouter from "./AppRouter";
import { teamMock1, teamMock2 } from "../team/mocks/teamsMock";
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

    describe("And when the user clicks to 'Details' link from 'Aniol's team'", () => {
      test("Then it should show 'Aniol's team' inside a heading", async () => {
        const pageTitleText = /Aniol's team/i;
        const linkText = /Details/i;

        render(
          <MemoryRouter initialEntries={[teamsPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        const addNewTeamLink = await screen.findAllByRole("link", {
          name: linkText,
        });

        await user.click(addNewTeamLink[0]);

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

    describe("And when the user clicks to 'Delete button", () => {
      test("Then it should show a spinner with 'Loading Spinner' text", async () => {
        const expectedLoaderText = /Loading Spinner/i;
        const buttonText = /Delete/i;

        http.delete(`${apiRestUrl}/teams/${teamMock2._id}`, () => {
          return HttpResponse.json<{ team: Team }>({
            team: teamMock2,
          });
        });

        render(
          <MemoryRouter initialEntries={[teamsPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        const deleteButton = screen.getAllByRole("button", {
          name: buttonText,
        });

        await user.click(deleteButton[0]);

        const loader = screen.getByLabelText(expectedLoaderText);

        expect(loader).toBeInTheDocument();
      });
    });

    describe("And when the user clicks to 'Delete button' and the API REST responds with status 200", () => {
      test("Then it should show a toast with 'Team deleted' text", async () => {
        const expectedToastText = /Team deleted/i;
        const buttonsText = /Delete/i;

        server.use(
          http.delete(`${apiRestUrl}/teams/${teamMock2._id}`, () => {
            return HttpResponse.json<{ team: Team }>({
              team: teamMock2,
            });
          }),
        );

        render(
          <MemoryRouter initialEntries={[teamsPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        const deleteButton = screen.getAllByRole("button", {
          name: buttonsText,
        });

        await user.click(deleteButton[1]);

        const toast = await screen.findByText(expectedToastText);

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
        const toastText = /A team with Aniol's team name already exists/i;

        render(
          <MemoryRouter initialEntries={[addNewTeamPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        await submitForm();

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
        const toastText = /Failed to add a new team/i;

        render(
          <MemoryRouter initialEntries={[addNewTeamPage]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );

        await submitForm();

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

        await submitForm();

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

        await submitForm();

        const pageTitle = await screen.findByRole("heading", {
          name: expectedPageTitle,
        });

        expect(pageTitle).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered at '/teams/:teamId", () => {
    describe("When it receives the team id '36b8f84d-df4e-4d49-b662-bcde71a8764f'", () => {
      test("Then it should show 'Aniol's team' inside a heading", async () => {
        const expectedTitleText = /Aniol's team/i;

        render(
          <MemoryRouter initialEntries={[`${teamDetailPage}/${teamMock1._id}`]}>
            <Provider store={store}>
              <AppRouter />
            </Provider>
          </MemoryRouter>,
        );
        const title = await screen.findByRole("heading", {
          name: expectedTitleText,
        });

        expect(title).toBeInTheDocument();
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
