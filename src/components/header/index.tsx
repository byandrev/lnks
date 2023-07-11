import { HeaderStyled, Title } from "./styles.tsx";
import Toggle from "../toggle";

function Header() {
  return (
    <HeaderStyled>
      <Title>Lnks</Title>
      <Toggle />
    </HeaderStyled>
  );
}

export default Header;
