import styled from "styled-components";

export const ButtonStyled = styled.button<{ $color: string }>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${(props) =>
    props.$color === "brand" ? props.theme.brand : props.theme.border};
  color: ${(props) => (props.$color === "brand" ? "white" : props.theme.text)};
  font-size: 1rem;
  font-family: inherit;
  border-radius: 0.3rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ButtonText = styled.span``;
