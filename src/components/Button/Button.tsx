import ButtonStyled from "./ButtonStyled";

interface ButtonsProps {
  text: string;
}

const Button = ({ text }: ButtonsProps): JSX.Element => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
