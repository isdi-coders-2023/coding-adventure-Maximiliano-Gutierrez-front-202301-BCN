import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a button component", () => {
  describe("When the button is render with the text 'Sign Up'", () => {
    test("Then it should render button with the text 'Sign Up'", () => {
      const insideText = "Sign up";

      render(<Button text={insideText} />);

      const expectedButton = screen.getByRole("button", { name: insideText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
