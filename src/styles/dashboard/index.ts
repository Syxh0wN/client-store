import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  padding: 1rem;
  color: white;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  margin-left: 1rem;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-align: center;

  &:hover {
    color: #ddd;
  }
`;

export const Body = styled.main`
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: #f0f0f0;
  padding: 1rem;
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 1rem;

  &:focus {
    border-color: #0077cc;
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #0077cc;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;

//

export const FormReg = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const LabelReg = styled.label`
  font-weight: bold;
`;

export const InputReg = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ButtonReg = styled.button`
  padding: 0.5rem;
  font-weight: bold;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  margin-top: 13px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const InfoText = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const LoginText = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1rem;
`;

export const LoginLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;

  &:hover {
    color: #0056b3;
  }
`;

//

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Card = styled(animated.div)`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  width: 350px;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
`;

export const HeaderDash = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Name = styled.h2`
  margin: 0;
  color: #333;
  font-size: 24px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const LabelDash = styled.p`
  font-weight: bold;
  color: #777;
`;

export const TextDash = styled.p`
  margin-left: 8px;
  color: #333;
`;
