import styled from "styled-components";

export const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  position: relative;

  @media screen and (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;
