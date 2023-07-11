import styled from "styled-components";

export const BannerStyled = styled.div`
  margin-top: 6rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.textLight};
  margin-bottom: 1rem;
`;
