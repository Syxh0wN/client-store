import { iUserModalProps } from "../../interfaces/user";
import {
  ModalHeader,
  CloseButton,
  ModalContainer,
  Overlay,
  AddressContainer,
  AddressItem,
  AddressLabel,
  AddressValue,
  NotClient,
} from "../../styles/modal_info_users";

export const UserModal: React.FC<iUserModalProps> = ({
  isOpen,
  onRequestClose,
  user,
}) => {
  if (!isOpen) {
    return null;
  }
  if (!user) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>Endereço do cliente</ModalHeader>
        {user.client ? (
          <AddressContainer>
            <AddressItem>
              <AddressLabel>Rua:</AddressLabel>
              <AddressValue>{user.client?.address.street}</AddressValue>
            </AddressItem>
            <AddressItem>
              <AddressLabel>Bairro:</AddressLabel>
              <AddressValue>{user.client?.address.neighborhood}</AddressValue>
            </AddressItem>
            <AddressItem>
              <AddressLabel>Número:</AddressLabel>
              <AddressValue>{user.client?.address.number}</AddressValue>
            </AddressItem>
            <AddressItem>
              <AddressLabel>Complemento:</AddressLabel>
              <AddressValue>{user.client?.address.complement}</AddressValue>
            </AddressItem>
            <AddressItem>
              <AddressLabel>CEP:</AddressLabel>
              <AddressValue>{user.client?.address.cep}</AddressValue>
            </AddressItem>
            <AddressItem>
              <AddressLabel>Cidade:</AddressLabel>
              <AddressValue>{user.client?.address.city}</AddressValue>
            </AddressItem>
            <AddressItem>
              <AddressLabel>Estado:</AddressLabel>
              <AddressValue>{user.client?.address.state}</AddressValue>
            </AddressItem>
          </AddressContainer>
        ) : (
          <AddressContainer>
            <NotClient>Usuário não é cliente</NotClient>
          </AddressContainer>
        )}
        <CloseButton onClick={onRequestClose}>Fechar</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};
