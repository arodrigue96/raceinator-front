import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When rendered", () => {
    test("Then it should show the website logo inside with the alternative text 'Raceinator logo'", () => {
      const logoAltText = /raceinator logo/i;

      render(<Header />);

      const websiteLogo = screen.getByAltText(logoAltText);

      expect(websiteLogo).toBeInTheDocument();
    });

    test("Then it should show 'Raceinator' as text", () => {
      const titleText = /raceinator/i;
      render(<Header />);

      const title = screen.getByText(titleText);

      expect(title).toBeInTheDocument();
    });
  });
});
