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

  ul {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
  }
`;

export const LinkTitle = styled.h3`
  margin-bottom: 0.1rem;

  a {
    text-decoration: none;
  }
`;
