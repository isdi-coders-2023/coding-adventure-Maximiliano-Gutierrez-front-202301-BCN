import styled from "styled-components";

const FormRegisterStyled = styled.form`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.12rem;

  label {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-family: var(--secondary-font);
    font-size: 1rem;
    font-weight: 700;
  }

  .form {
    &__input {
      background-color: #e8e8e8;
      width: 52rem;
      height: 3.5rem;
      border-radius: 0.5rem;
      border-style: none;
      font-family: var(--secondary-font);
      font-weight: 400;
      font-size: 1rem;
      padding-left: 10px;
    }
  }
`;

export default FormRegisterStyled;
