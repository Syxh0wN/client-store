import { Container, Header, Logo, Nav, NavLink } from "../../styles/dashboard";
import logo from "../../assets/logo/logo.png";
import { RegistrationForm } from "../../components/register";
import { Dashboard } from "../../components/dashboard";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const MainDash = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return null;
  }
  const handleLogout = () => {
    localStorage.removeItem("@clientStore:__token");
  };
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo" />
        <Nav>
          <NavLink href="#informacoes">Informações</NavLink>
          <NavLink href="#contatos">Contatos</NavLink>
          <NavLink href="#sobre">Sobre</NavLink>
          {user ? (
            <NavLink href="/dashboard" onClick={handleLogout}>
              LogOut
            </NavLink>
          ) : (
            <NavLink href="/login">Login</NavLink>
          )}
        </Nav>
      </Header>

      {user ? <Dashboard /> : <RegistrationForm />}
    </Container>
  );
};
