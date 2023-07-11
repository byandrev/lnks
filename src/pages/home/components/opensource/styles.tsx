import styled from "styled-components";

export const OpenSourceStyled = styled.div`
  margin: 3rem 0;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.textLight};
  margin-bottom: 1rem;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
`;
