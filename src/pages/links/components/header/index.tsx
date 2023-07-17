import Button from "../../../../components/common/button";
import { MdAdd } from "react-icons/md";
import Flex from "../../../../components/common/flex";
import { Title } from "./styles.tsx";
import { FC } from "react";

interface Props {
  openModal: () => void;
}

const Header: FC<Props> = ({ openModal }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Title>All links</Title>
      <Button icon={<MdAdd />} onClick={openModal}>
        New
      </Button>
    </Flex>
  );
};

export default Header;
