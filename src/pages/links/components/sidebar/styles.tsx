import styled from "styled-components";

export const SidebarStyled = styled.aside`
  width: 100%;
  background: ${(props) => props.theme.bgAlt};
  padding: 1rem;
  border-radius: 0.5rem;
  max-height: 60vh;

  p {
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    margin-left: 0.5rem;
    cursor: pointer;
    color: ${(props) => props.theme.textLight};
  }
`;
