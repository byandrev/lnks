import Button from "../../../../components/common/button";
import { MdAdd } from "react-icons/md";
import Flex from "../../../../components/common/flex";
import { Title } from "./styles.tsx";

function Header() {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Title>All links</Title>
      <Button icon={<MdAdd />}>New</Button>
    </Flex>
  );
}

export default Header;
