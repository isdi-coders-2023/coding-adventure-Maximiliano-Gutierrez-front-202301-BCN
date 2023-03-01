import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a button component", () => {
  describe("When the button is render with the text 'Sign Up'", () => {
    test("Then it should show button with the text 'Sign Up'", () => {
      const insideText = "Sign up";

      render(<Button text={insideText} />);

      const button = screen.getByRole("button", { name: insideText });

      expect(button).toBeInTheDocument();
    });
  });
});
