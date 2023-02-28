import FormStyled from "./FormRegisterStyled";

const FormRegister = (): JSX.Element => {
  return (
    <>
      <FormStyled>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="Introduce your email"
            required
          />
          Email
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="Introduce your password"
          />
          Password
        </label>
        <label htmlFor="image">
          <input type="file" id="image" placeholder="Introduce your image" />
          Image
        </label>
      </FormStyled>
    </>
  );
};

export default FormRegister;
