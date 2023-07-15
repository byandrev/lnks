import { ReactNode, FC } from "react";
import styled from "styled-components";

const FlexStyled = styled.div<{
  $justifyContent?: string;
  $alignItems?: string;
  $flexDirection?: string;
  $gap?: string;
}>`
  display: flex;
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  align-items: ${(props) => props.$alignItems || "flex-start"};
  flex-direction: ${(props) => props.$flexDirection || "row"};
  gap: ${(props) => `${props.$gap || "0"}rem`};
`;

interface Props {
  children: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: string;
}

const Flex: FC<Props> = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
}) => {
  return (
    <FlexStyled
      $justifyContent={justifyContent}
      $gap={gap}
      $alignItems={alignItems}
      $flexDirection={flexDirection}
    >
      {children}
    </FlexStyled>
  );
};

export default Flex;
