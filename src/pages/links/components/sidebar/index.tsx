import { SidebarStyled } from "./styles.tsx";
import Input from "../../../../components/forms/input";
import { useState } from "react";
import { CgTag } from "react-icons/cg";
import Flex from "../../../../components/common/flex";

function Sidebar() {
  const [value, setValue] = useState("");

  return (
    <SidebarStyled>
      <p>Filters</p>
      <Input
        placeholder="Search..."
        value={value}
        handleChange={(val) => setValue(val)}
      />

      <p>Tags</p>
      <ul>
        <li>
          <Flex gap="0.3" alignItems="center">
            <CgTag />
            <span>web</span>
          </Flex>
        </li>
        <li>
          <Flex gap="0.3" alignItems="center">
            <CgTag />
            <span>programming</span>
          </Flex>
        </li>
      </ul>
    </SidebarStyled>
  );
}

export default Sidebar;
