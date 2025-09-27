import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { IFormModalProps } from "../../interfaces/user";
import {
  FormInput,
  FormLabel,
  FormTitle,
  SubmitButton,
} from "../../styles/modal_register_client";
import { ModalContainer, Overlay } from "../../styles/modal_info_users";

export const FormModal: React.FC<IFormModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { putClient, selectedUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    street: "",
    neighborhood: "",
    number: 0,
    complement: "",
    cep: "",
    city: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedUser) {
      return;
    }

    const updatedFormData = {
      id: selectedUser.id,
      address: {
        street: formData.street,
        neighborhood: formData.neighborhood,
        number: formData.number,
        cep: formData.cep,
        city: formData.city,
        state: formData.state,
      },
    };
    putClient(updatedFormData);
    onRequestClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <ModalContainer>
        <FormTitle>Formulário de Endereço</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormLabel>
            Rua:
            <FormInput
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            Bairro:
            <FormInput
              type="text"
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            Número:
            <FormInput
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            Complemento:
            <FormInput
              type="text"
              name="complement"
              value={formData.complement}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            CEP:
            <FormInput
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            Cidade:
            <FormInput
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel>
            Estado:
            <FormInput
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </FormLabel>
          <SubmitButton type="submit">Cadastrar</SubmitButton>
        </form>
      </ModalContainer>
    </Overlay>
  );
};
