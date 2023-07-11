import { FooterStyled } from "./styles.tsx";
import Container from "../common/container";

function Footer() {
  return (
    <Container>
      <FooterStyled>
        <p>© 2023 | Lnks</p>

        <p>
          Development with ❤️ by{" "}
          <a href="https://byandrev-blog.vercel.app" target="_blank">
            Andres Parra
          </a>
        </p>
      </FooterStyled>
    </Container>
  );
}

export default Footer;
