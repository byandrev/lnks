import { OpenSourceStyled, Title, Description, Links } from "./styles.tsx";
import CardRepository from "../../../../components/common/card_repository";
import { MdWeb } from "react-icons/md";
import { HiOutlineServerStack } from "react-icons/hi2";

function OpenSource() {
  return (
    <OpenSourceStyled>
      <Title>Open Source</Title>
      <Description>Collaborates in the following repositories</Description>

      <Links>
        <CardRepository
          title="Frontend"
          icon={<MdWeb />}
          url="https://github.com/byandrev/lnks"
        />

        <CardRepository
          title="Backend"
          icon={<HiOutlineServerStack />}
          url="https://github.com/byandrev/lnks-api-spring-boot"
        />
      </Links>
    </OpenSourceStyled>
  );
}

export default OpenSource;
