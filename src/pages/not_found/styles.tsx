import styled from "styled-components";

export const ContentStyled = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 150px;
  margin: 0 auto 2rem auto;
`;

export const Title = styled.h3`
  font-size: 4rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.textLight};
  margin-bottom: 1rem;
`;
