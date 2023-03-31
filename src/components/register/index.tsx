import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { iRegistrationData } from "../../interfaces/user";
import {
  Body,
  ButtonReg,
  FormReg,
  InfoText,
  InputReg,
  LabelReg,
  LoginLink,
  LoginText,
} from "../../styles/dashboard";

export const RegistrationForm: React.FC = () => {
  const { putRegister } = useContext(AuthContext);

  const [formData, setFormData] = useState<iRegistrationData>({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      isAdmin: false,
    };
    putRegister(user);
  };

  return (
    <Body>
      <FormReg onSubmit={handleSubmit}>
        <InfoText>
          A conta ainda não está criada. Preencha os campos abaixo para se
          registrar.
        </InfoText>
        <LabelReg htmlFor="name">Nome:</LabelReg>
        <InputReg
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <LabelReg htmlFor="email">E-mail:</LabelReg>
        <InputReg
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <LabelReg htmlFor="contact">Contato:</LabelReg>
        <InputReg
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <LabelReg htmlFor="password">Senha:</LabelReg>
        <InputReg
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <ButtonReg type="submit">Registrar</ButtonReg>
        <LoginText>
          Já possui uma conta?{" "}
          <LoginLink href="/login">Faça login aqui.</LoginLink>
        </LoginText>
      </FormReg>
    </Body>
  );
};
