import { FormEvent } from "react";
import Button from "../../common/button";
import { Title, FormStyled, ErrorContainer, SuccessContainer } from "./styles";

interface Props {
  children?: React.ReactNode;
  title: string;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
  success?: string;
}

const SimpleForm: React.FC<Props> = ({
  title,
  children,
  onSubmit,
  success,
  error,
}) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit(evt);
  };

  return (
    <FormStyled>
      <Title>{title}</Title>
      {error && <ErrorContainer>¡{error}!</ErrorContainer>}
      {success && <SuccessContainer>¡{success}!</SuccessContainer>}

      <form onSubmit={handleSubmit}>
        {children}
        <Button>Submit</Button>
      </form>
    </FormStyled>
  );
};

export default SimpleForm;
