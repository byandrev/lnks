import { FormEvent } from "react";
import Button from "../../common/button";
import { Title, FormStyled, ErrorContainer } from "./styles";

interface Props {
  children?: React.ReactNode;
  title: string;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
}

const SimpleForm: React.FC<Props> = ({ title, children, onSubmit, error }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit(evt);
  };

  return (
    <FormStyled>
      <Title>{title}</Title>
      {error && <ErrorContainer>¡{error}!</ErrorContainer>}
      <form onSubmit={handleSubmit}>
        {children}
        <Button>Submit</Button>
      </form>
    </FormStyled>
  );
};

export default SimpleForm;
