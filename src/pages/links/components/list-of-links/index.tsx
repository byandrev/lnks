import { FC } from "react";
import LinkItem from "../../../../components/link-item";
import Link from "../../../../@types/Link";
import Flex from "../../../../components/common/flex";
import { ListOfLinksContainer } from "./styles.tsx";

interface Props {
  links: Link[];
}

const ListOfLinks: FC<Props> = ({ links }) => {
  return (
    <ListOfLinksContainer>
      <Flex flexDirection="column" gap="0.5">
        {links &&
          links.map((link) => (
            <LinkItem
              key={link.id}
              id={link.id}
              description={link.description}
              name={link.name}
              url={link.url}
            />
          ))}
      </Flex>
    </ListOfLinksContainer>
  );
};

export default ListOfLinks;
