import { useState } from "react";
import Input from "../../../../components/forms/input";
import SimpleForm from "../../../../components/forms/simple-form";
import { login } from "../../../../services/Auth";
import { useQuery } from "react-query";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => login(email, password),
    enabled: false,
    retry: false,
    onSuccess: (data) => console.log(data),
  });
  let errMessage: string | undefined = "";

  const handleSubmit = () => {
    errMessage = "";
    refetch();
  };

  if (error instanceof Error) {
    errMessage = error?.message;
  }

  return (
    <SimpleForm title="Sign In" onSubmit={handleSubmit} error={errMessage}>
      <span>{isFetching ? "Loading..." : ""}</span>
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
