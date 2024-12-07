import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given the Loader component", () => {
  describe("When rendered", () => {
    test("Then it should show a spinner with 'Loading Spinner' text", async () => {
      const expectedLoaderText = /Loading Spinner/i;

      render(<Loader />);

      const loader = screen.getByLabelText(expectedLoaderText);

      expect(loader).toBeInTheDocument();
    });
  });
});
