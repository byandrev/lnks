import { useEffect, useState } from "react";
import Input from "../../../../components/forms/input";
import SimpleForm from "../../../../components/forms/simple-form";
import useUser from "../../../../hooks/useUser";
import { useNavigate } from "react-router-dom";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user, error, loading } = useUser();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (login) login({ email, password });
  };

  useEffect(() => {
    if (user && !error && !loading) {
      navigate("/links");
    }
  }, [user, error, loading, navigate]);

  return (
    <SimpleForm
      title="Sign In"
      onSubmit={handleSubmit}
      error={error || undefined}
      loading={loading}
    >
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
