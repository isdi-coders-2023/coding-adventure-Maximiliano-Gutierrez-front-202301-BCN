import FormRegisterStyled from "./FormRegisterStyled";
import Button from "../Button/Button";

const FormRegister = (): JSX.Element => {
  return (
    <FormRegisterStyled className="form">
      <label htmlFor="email">
        Email
        <input
          className="form__input"
          type="email"
          id="email"
          placeholder="Introduce your email"
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          className="form__input"
          type="password"
          id="password"
          placeholder="Introduce your password"
        />
      </label>
      <label htmlFor="image">
        Image
        <input
          className="form__input"
          type="file"
          id="image"
          placeholder="Introduce your image"
        />
      </label>
      <Button text={"Sign Up"} />
    </FormRegisterStyled>
  );
};

export default FormRegister;
