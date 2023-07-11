import useDarkMode from "../../hooks/useDarkMode.ts";
import Button from "../common/button";
import { FaMoon } from "react-icons/fa";

function Toggle() {
  const { themeToggler } = useDarkMode();

  return <Button icon={<FaMoon />} onClick={themeToggler}></Button>;
}

export default Toggle;
