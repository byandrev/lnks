import styled from "styled-components";

export const FormStyled = styled.div`
  margin: 5rem auto 10rem auto;
  max-width: 500px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ErrorContainer = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.warning};
  color: white;
  margin-bottom: 1rem;
`;

export const SuccessContainer = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.success};
  color: white;
  margin-bottom: 1rem;
`;
