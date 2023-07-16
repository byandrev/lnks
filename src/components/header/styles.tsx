import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 90%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;

  & .link {
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.brand};
    }
  }

  & .actions button {
    font-size: 0.9rem;
    padding-top: 0.35rem;
    padding-bottom: 0.35rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;
