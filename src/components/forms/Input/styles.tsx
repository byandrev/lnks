import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 0.6rem 1.2rem;
  border: 2px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bgAlt};
  color: ${(props) => props.theme.text};
  font-family: inherit;
  font-size: .9rem;
  border-radius: 0.3rem;
  width: 100%;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
  }
`;
