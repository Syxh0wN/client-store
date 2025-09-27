import styled from "styled-components";

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #43a047;
  }
`;
