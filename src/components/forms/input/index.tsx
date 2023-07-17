import { ChangeEvent } from "react";
import { InputStyled } from "./styles";

interface InputProps {
  value: string;
  handleChange: (val: string) => void;
  placeholder?: string;
  type?: string;
  isRequired?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  placeholder = "...",
  type = "text",
  handleChange,
  isRequired = false,
}) => {
  return (
    <InputStyled
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(evt: ChangeEvent<HTMLInputElement>) =>
        handleChange(evt.target.value)
      }
      required={isRequired}
    />
  );
};

export default Input;
