import { ReactNode } from "react";
import { CardStyled, Icon, Link } from "./styles.tsx";

interface Props {
  title: string;
  icon: ReactNode;
  url: string;
}

function CardRepository({ title, icon, url }: Props) {
  return (
    <Link href={url} target="_blank">
      <CardStyled>
        <Icon>{icon}</Icon>
        {title}
      </CardStyled>
    </Link>
  );
}

export default CardRepository;
