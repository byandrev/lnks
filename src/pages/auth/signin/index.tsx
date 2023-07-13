import { useState } from "react";
import Wrapper from "../../../components/wrapper";
import Input from "../../../components/forms/Input";

function SignIn() {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (val: string) => {
    setEmail(val);
  };

  return (
    <Wrapper>
      <p>SignIn</p>
      <Input
        value={email}
        handleChange={handleChangeEmail}
        placeholder="Email"
        type="email"
      />
    </Wrapper>
  );
}

export default SignIn;
