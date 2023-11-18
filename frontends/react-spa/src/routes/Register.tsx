import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: async (data) => {
      console.log(data.data.access_token);
      localStorage.setItem("access_token", data.data.access_token);

      navigate("/dashboard");
    },
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await mutation.mutateAsync({ email, password });
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">
        {mutation.isPending ? "Loading..." : "Register"}
      </button>
      {mutation.isError ? <div>{mutation.error.message}</div> : null}
    </form>
  );
}

export default Register;
