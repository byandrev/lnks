import { LinkStyled, LinkTitle } from "./styles.tsx";
import { FC } from "react";
import Button from "../common/button";
import { TbWorldWww } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";
import Flex from "../common/flex";
import Badge from "../common/badge/index.tsx";
import { useTheme } from "styled-components";

interface Props {
  id: string;
  name: string;
  url: string;
  tags: string[];
}

const LinkItem: FC<Props> = ({ name, url, tags }) => {
  const theme = useTheme();

  const handleVisitURL = () => {
    window.open(url, "_blank");
  };

  return (
    <LinkStyled>
      <Flex justifyContent="space-between" alignItems="center">
        <div>
          <LinkTitle>
            <a href={url} target="_blank">
              {name}
            </a>
          </LinkTitle>
          <ul>
            {tags &&
              tags.map((tag) => (
                <li key={tag}>
                  <Badge text={tag} bgColor={theme.bgAlt} />
                </li>
              ))}
          </ul>
        </div>

        <Flex gap="0.5">
          <Button
            icon={<TbWorldWww />}
            onClick={handleVisitURL}
            color="dark"
          ></Button>
          <Button icon={<SlOptionsVertical />} color="dark"></Button>
        </Flex>
      </Flex>
    </LinkStyled>
  );
};

export default LinkItem;
