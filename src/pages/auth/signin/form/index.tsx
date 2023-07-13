import { useState } from "react";
import Input from "../../../../components/forms/Input";
import { FormStyled } from "./styles";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FormStyled>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        handleChange={(val) => setEmail(val)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        handleChange={(val) => setPassword(val)}
      />
    </FormStyled>
  );
}

export default Form;
