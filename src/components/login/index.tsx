import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Body } from "../../styles/dashboard";
import {
  ButtonLog,
  ForgotPassword,
  FormLog,
  InputLog,
  LabelLog,
  NoAccount,
  SignUpLink,
} from "../../styles/login";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { putLogin } = useContext(AuthContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    putLogin({ email, password });
  };

  return (
    <Body>
      <FormLog onSubmit={handleSubmit}>
        <LabelLog htmlFor="email">E-mail:</LabelLog>
        <InputLog
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <LabelLog htmlFor="password">Senha:</LabelLog>
        <InputLog
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ButtonLog type="submit">Login</ButtonLog>
        <ForgotPassword href="#">Esqueceu a senha?</ForgotPassword>
        <NoAccount>Ainda não possui conta?</NoAccount>
        <SignUpLink href="/register">Faça já!</SignUpLink>
      </FormLog>
    </Body>
  );
};
