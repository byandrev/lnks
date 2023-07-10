import styled from "styled-components";
import useDarkMode from "../../hooks/useDarkMode.ts";

const Button = styled.button`
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

function Toggle() {
  const { themeToggler } = useDarkMode();

  return <Button onClick={themeToggler}>Switch Theme</Button>;
}

export default Toggle;
