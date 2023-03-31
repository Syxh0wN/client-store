import styled from "styled-components";

export const ModalHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const AddressItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const AddressLabel = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  width: 120px;
`;

export const AddressValue = styled.span`
  font-size: 1.2rem;
`;

export const NotClient = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #f44336;

  margin-bottom: inherit;

  &::after {
    content: " (Nao possui endereco cadastrado)";
  }
`;

export const CloseButton = styled.button`
  background-color: #f44336;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const AddressTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export const AddressText = styled.span`
  font-size: 0.8rem;
  font-weight: normal;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 40rem;
  animation: slide-down 0.5s ease-in-out;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ModalContent = styled.div``;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CloseIconLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #333;
  transform: rotate(45deg);
`;

export const CloseIconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
