import { FC } from "react";
import LinkItem from "../../../../components/link-item";
import Link from "../../../../@types/Link";
import Flex from "../../../../components/common/flex";
import { ListOfLinksContainer } from "./styles.tsx";

interface Props {
  links: Link[] | null;
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
              name={link.name}
              url={link.url}
              tags={link.tags}
            />
          ))}
      </Flex>
    </ListOfLinksContainer>
  );
};

export default ListOfLinks;
