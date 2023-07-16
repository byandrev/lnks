import { HeaderStyled } from "./styles.tsx";
import Toggle from "../toggle";
import useUser from "../../hooks/useUser.tsx";
import Flex from "../common/flex/index.tsx";
import Button from "../common/button/index.tsx";
import { useNavigate } from "react-router-dom";
import Logo from "../common/logo/index.tsx";

function Header() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleToLogin = () => {
    navigate("/signin");
  };

  return (
    <HeaderStyled>
      <h1>
        <Logo />
      </h1>

      <Flex gap="0.5" alignItems="center">
        {user ? (
          <Flex gap="1" alignItems="center">
            <p>Name: {user.name}</p>
            <div className="actions">
              <Button onClick={logout}>logout</Button>
            </div>
          </Flex>
        ) : (
          <div className="actions">
            <Button onClick={handleToLogin}>Login</Button>
          </div>
        )}
        <Toggle />
      </Flex>
    </HeaderStyled>
  );
}

export default Header;
