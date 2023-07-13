import { FormEvent, useState } from "react";
import Input from "../../../../components/forms/input";
import SimpleForm from "../../../../components/forms/simple-form";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    console.log(evt);
    console.log(email);
    console.log(password);
  };

  return (
    <SimpleForm title="Sign In" onSubmit={handleSubmit}>
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
    </SimpleForm>
  );
}

export default Form;
