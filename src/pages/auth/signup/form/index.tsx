import { useState } from "react";
import Input from "../../../../components/forms/input";
import SimpleForm from "../../../../components/forms/simple-form";
import { register } from "../../../../services/Auth";
import { useQuery } from "react-query";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["signup"],
    queryFn: () => register(email, name, password),
    enabled: false,
    retry: false,
  });
  let errMessage: string | undefined = "";

  const handleSubmit = () => {
    void refetch();
  };

  if (error instanceof Error) {
    errMessage = error?.message;
  }

  return (
    <SimpleForm
      title="Sign Up"
      onSubmit={handleSubmit}
      error={errMessage}
      success={!error && data ? "User successfully registered" : undefined}
    >
      <span>{isLoading ? "Loading..." : ""}</span>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        handleChange={(val) => setEmail(val)}
      />
      <Input
        placeholder="Name"
        value={name}
        handleChange={(val) => setName(val)}
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
