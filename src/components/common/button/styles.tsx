import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${(props) => props.theme.brand};
  color: white;
  font-size: 1rem;
  font-family: inherit;
  border-radius: 0.3rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ButtonText = styled.span``;
