import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;
