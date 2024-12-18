# Raceinator

Raceinator is a web application that allows users to manage and view information about MotoGP teams. Below is an overview of its current structure and functionalities:

## Main Sections

### Teams

The **Team List** section displays each team's **key details**, including:

- **Team Image**: A prominent image representing the team motorbikes.
- **Team Name**: The name of the team.
- **Team Riders**: A list of the riders' names.

Each team entry also includes the following buttons:

- **Details**: View detailed information about the team.
- **Delete**: Remove the team from the list.

The **Team Image** serves as a key visual highlight, providing immediate recognition of the team.

### Add New Team

- Provides a form to add a new team with the following **required fields**:
  - **Name**: The name of the team.
  - **Riders' Names**: Names of the riders in the team.
  - **Championship Titles**: Number of championships the team has won.
  - **Image URL**: Link to an image representing the team.
  - **Alternative Image Text**: Text for accessibility purposes, describing the image.
  - **Description**: A brief description of the team.
  - **Debut Year**: The year the team debuted.
  - **Official Team Status**: A boolean value indicating whether the team is official.

### Team Details

- Selecting a team from the list shows a detailed view with all available information about the team.

## Key Technologies

### **Core Technologies**

- **React**: Main library for building the user interface.
- **Vite**: Fast development and build tool.
- **TypeScript**: Static typing to enhance code quality and maintainability.
- **Redux Toolkit**: Efficient state management solution.

### **Testing**

- **Vitest**: Main tool for unit testing and coverage.
- **Testing Library**:
  - **@testing-library/react**: Testing React components.
  - **@testing-library/jest-dom**: Custom matchers for DOM assertions.
  - **@testing-library/user-event**: Simulates user interactions.
- **MSW (Mock Service Worker)**: API mocking for integration testing.

### **Code Quality**

- **ESLint**: Linting to ensure code consistency.
- **Prettier**: Code formatting tool.
- **Husky**: Pre-commit hooks for enforcing standards.
- **Commitlint**: Ensures standardized commit messages.

## State Management

### Data Layer Types

**ui**

- `isLoading`: boolean indicating whether a loading operation is in progress.

**teams**

- `teams`: array of objects representing the racing teams.

### Data Modifications

**ui**

- `showLoading`: sets `isLoading` to `true`.
- `hideLoading`: sets `isLoading` to `false`.

**teams**

- `loadTeams`: loads an array of teams into the state.
- `loadTeam`: Loads a single team's details into the state.

### Data Description

**ui**

- `isLoading`: indicates whether a loading spinner should be displayed.

**teams**

- `teams`: list of objects representing the racing teams, each containing the following details:
  - `name`: name of the team.
  - `ridersNames`: array of riders' names.
  - `championshipTitles`: number of championship titles won by the team.
  - `imageUrl`: URL to an image of the team's motorbikes.
  - `altImageText`: alternative text for the image.
  - `description`: brief description of the team.
  - `debutYear`: year when the team debuted.
  - `isOfficialTeam`: boolean indicating whether the team is an official team.
  - `_id`: unique identifier of the team.

## Environment Variables

To ensure the application functions correctly, a `.env` file is required in the root directory with the following variable:

```
VITE_API_URL=<yourApiRestUrl>
```

## API Client

The `TeamsClient` is responsible for interacting with the REST API to manage the teams. Below are the available operations:

## Creating a New Team

**Method**: `createTeam`  
**Endpoint**: `POST ${import.meta.env.VITE_API_URL}/teams`  
**Request Body**:

```json
{
  "name": "Ducati Lenovo Team",
  "ridersNames": ["Marc Marquez", "Francesco Bagnaia"],
  "championshipTitles": 2,
  "imageUrl": "https://exclusivomotos.com/wp-content/uploads/2021/02/Ducati-team-scaled.jpg",
  "altImageText": "The team's motorbikes",
  "description": "The Ducati Lenovo Team is one of MotoGP's most successful teams, representing Italian innovation and speed. With its headquarters in Bologna, Italy, and the powerful Ducati Desmosedici GP23, the team consistently competes at the top level of MotoGP.",
  "debutYear": 2003,
  "isOfficialTeam": true
}
```

**Response**:

```json
{
  "createdTeam": {
    "_id": "674caf6429e6f47f8dc6e67c",
    "name": "Ducati Lenovo Team",
    "ridersNames": ["Marc Marquez", "Francesco Bagnaia"],
    "championshipTitles": 2,
    "imageUrl": "https://exclusivomotos.com/wp-content/uploads/2021/02/Ducati-team-scaled.jpg",
    "altImageText": "The team's motorbikes",
    "description": "The Ducati Lenovo Team is one of MotoGP's most successful teams, representing Italian innovation and speed. With its headquarters in Bologna, Italy, and the powerful Ducati Desmosedici GP23, the team consistently competes at the top level of MotoGP.",
    "debutYear": 2003,
    "isOfficialTeam": true
  }
}
```

### Fetching the List of Teams

- **Method**: `getAll`
- **Endpoint**: `GET ${import.meta.env.VITE_API_URL}/teams`
- **Response**:

```json
{
  "teams": [
    {
      "_id": "674caf6429e6f47f8dc6e67c",
      "name": "Ducati Lenovo Team",
      "ridersNames": ["Marc Marquez", "Francesco Bagnaia"],
      "championshipTitles": 2,
      "imageUrl": "https://exclusivomotos.com/wp-content/uploads/2021/02/Ducati-team-scaled.jpg",
      "altImageText": "The team's motorbikes",
      "description": "The Ducati Lenovo Team is one of MotoGP's most successful teams, representing Italian innovation and speed. With its headquarters in Bologna, Italy, and the powerful Ducati Desmosedici GP23, the team consistently competes at the top level of MotoGP.",
      "debutYear": 2003,
      "isOfficialTeam": true
    }
  ]
}
```

## Fetching a Single Team by ID

**Method**: `getTeamById`  
**Endpoint**: `GET ${import.meta.env.VITE_API_URL}/teams/{teamId}`

**Response**:

```json
{
  "team": {
    "_id": "674caf6429e6f47f8dc6e67c",
    "name": "Ducati Lenovo Team",
    "ridersNames": ["Francesco Bagnaia", "Marc Marquez"],
    "championshipTitles": 2,
    "imageUrl": "https://exclusivomotos.com/wp-content/uploads/2021/02/Ducati-team-scaled.jpg",
    "altImageText": "The team's motorbikes",
    "description": "The Ducati Lenovo Team is one of MotoGP's most successful teams, representing Italian innovation and speed. With its headquarters in Bologna, Italy, and the powerful Ducati Desmosedici GP23, the team consistently competes at the top level of MotoGP.",
    "debutYear": 2003,
    "isOfficialTeam": true
  }
}
```

## Deleting a Team by ID

**Method**: `deleteTeamById`  
**Endpoint**: `DELETE ${import.meta.env.VITE_API_URL}/teams/{teamId}`  
**Response**:

```json
{
  "deletedTeam": {
    "_id": "674caf6429e6f47f8dc6e67c",
    "name": "Ducati Lenovo Team",
    "ridersNames": ["Marc Marquez", "Francesco Bagnaia"],
    "championshipTitles": 2,
    "imageUrl": "https://exclusivomotos.com/wp-content/uploads/2021/02/Ducati-team-scaled.jpg",
    "altImageText": "The team's motorbikes",
    "description": "The Ducati Lenovo Team is one of MotoGP's most successful teams, representing Italian innovation and speed. With its headquarters in Bologna, Italy, and the powerful Ducati Desmosedici GP23, the team consistently competes at the top level of MotoGP.",
    "debutYear": 2003,
    "isOfficialTeam": true
  }
}
```
