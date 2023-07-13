import { FormEvent } from "react";
import Button from "../../common/button";
import { Title, FormStyled } from "./styles";

interface Props {
  children?: React.ReactNode;
  title: string;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

const SimpleForm: React.FC<Props> = ({ title, children, onSubmit }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit(evt);
  };

  return (
    <FormStyled>
      <Title>{title}</Title>
      <form onSubmit={handleSubmit}>
        {children}
        <Button>Submit</Button>
      </form>
    </FormStyled>
  );
};

export default SimpleForm;
