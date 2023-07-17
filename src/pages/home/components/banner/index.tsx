import Container from "../../../../components/common/container";
import { BannerStyled, Description, Title } from "./styles.tsx";
import Button from "../../../../components/common/button";
import { BsRocketTakeoff } from "react-icons/bs";
import OpenSource from "../opensource";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <Container>
      <BannerStyled>
        <Title>Welcome to Lnks</Title>
        <Description>
          The perfect application for saving and organizing your links
        </Description>
        <Link to="/signup">
          <Button icon={<BsRocketTakeoff />}>Get Started</Button>
        </Link>

        <OpenSource />
      </BannerStyled>
    </Container>
  );
}

export default Banner;
