import styled from "styled-components";

export const BadgeStyled = styled.span<{
  $textColor: string;
  $bgColor: string;
}>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 999px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  font-size: 12px;
  font-weight: 500;
`;
