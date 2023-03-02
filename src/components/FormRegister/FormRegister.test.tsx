import { render, screen } from "@testing-library/react";
import FormRegister from "./FormRegister";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show it with text label password", () => {
      const label = "Password";
      render(<FormRegister />);

      const result = screen.getByLabelText(label);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show it with text label email", () => {
      const label = "Email";
      render(<FormRegister />);

      const result = screen.getByLabelText(label);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show an input with type 'Introduce your image'", () => {
      const typeInput = "Introduce your image";
      render(<FormRegister />);

      const result = screen.getByPlaceholderText(typeInput);

      expect(result).toBeInTheDocument();
    });
  });
});
