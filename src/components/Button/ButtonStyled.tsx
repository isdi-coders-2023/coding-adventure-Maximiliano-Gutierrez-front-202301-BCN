import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;

  background-color: var(--secondary-color);
  border-radius: 10px;
  font-family: var(--primary-font);
  width: 323px;
  height: 40px;
  top: 824px;
  font-size: 1.25rem;

  @media (min-width: 415px) {
    height: 3.56rem;
  }

  :disabled {
    opacity: 57%;
  }
`;

export default ButtonStyled;
