import Wrapper from "../../components/wrapper";
import { ContentStyled, Image, Title, Description } from "./styles.tsx";
import Button from "../../components/common/button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Wrapper>
      <ContentStyled>
        <Image src="/not_found.svg" title="Ilustration of undraw.co" />
        <Title>404</Title>
        <Description>Oops... page not found</Description>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </ContentStyled>
    </Wrapper>
  );
}

export default NotFound;
