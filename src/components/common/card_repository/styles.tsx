import styled from "styled-components";

export const CardStyled = styled.div`
  padding: 1rem;

  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.div`
  font-size: 1.5rem;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.textLight};
  display: block;
  border-radius: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    background-color: ${(props) => props.theme.border};
  }
`;
