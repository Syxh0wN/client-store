import styled from "styled-components";

export const FormLog = styled.form`
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

export const LabelLog = styled.label`
  font-weight: bold;
`;

export const InputLog = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ButtonLog = styled.button`
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

export const ForgotPassword = styled.a`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;

  &:hover {
    color: #0056b3;
  }

  text-align: center;
`;

export const NoAccount = styled.p`
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const SignUpLink = styled.a`
  color: #0077cc;
  text-decoration: none;
  text-align: center;
`;
