import styled from "styled-components";

export const LinkStyled = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border: 2px solid ${(props) => props.theme.border};

  p {
    color: ${(props) => props.theme.textLight};
    font-size: 0.9rem;
  }
`;

export const LinkTitle = styled.h3`
  margin-bottom: 0.1rem;

  a {
    text-decoration: none;
  }
`;
