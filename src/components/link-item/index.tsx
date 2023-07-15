import { LinkStyled, LinkTitle } from "./styles.tsx";
import { FC } from "react";
import Button from "../common/button";
import { TbWorldWww } from "react-icons/tb";
import { SlOptionsVertical } from "react-icons/sl";
import Flex from "../common/flex";

interface Props {
  id: string;
  name: string;
  description?: string;
  url: string;
  tags?: string[];
}

const LinkItem: FC<Props> = ({ name, description, url }) => {
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
          <p>{description}</p>
        </div>

        <Flex gap="0.5">
          <Button icon={<TbWorldWww />} onClick={handleVisitURL}></Button>
          <Button icon={<SlOptionsVertical />}></Button>
        </Flex>
      </Flex>
    </LinkStyled>
  );
};

export default LinkItem;
