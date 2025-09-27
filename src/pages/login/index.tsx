import { LoginForm } from "../../components/login";
import {
  Body,
  Container,
  Header,
  Logo,
  Nav,
  NavLink,
} from "../../styles/dashboard";
import logo from "../../assets/logo/logo.png";

export const MainLogin = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo" />
        <Nav>
          <NavLink href="#informacoes">Informações</NavLink>
          <NavLink href="#contatos">Contatos</NavLink>
          <NavLink href="#sobre">Sobre</NavLink>
        </Nav>
      </Header>
      <Body>
        <LoginForm />
      </Body>
    </Container>
  );
};
