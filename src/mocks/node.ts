import { setupServer } from "msw/node";
import { handlers } from "../team/mocks/handlers";

export const server = setupServer(...handlers);
