export interface iRegistrationData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface IAddress {
  id?: string | undefined;
  street: string;
  neighborhood: string;
  number: number;
  complement?: string;
  cep: string;
  city: string;
  state: string;
}

export interface iClientCreate {
  id: string;
  address: IAddress;
}

export interface IClient {
  address: IAddress;
  id: string | undefined;
  created_at: string;
  updated_at: string;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  isAdmin: boolean;
  created_at: string;
  updated_at: string;
  client: IClient | null;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iExtendUser {
  putLogin: (data: iUserLogin) => Promise<void>;
  user: iUser | null;
  users: iUser[] | null;
  loading: boolean;
  putRegister: (data: iRegistrationData) => Promise<void>;
  menuSelect: string;
  setmenuSelect: (value: string) => void;
  putClient: (data: iClientCreate) => Promise<void>;
  selectedUser: iUser | null;
  setSelectedUser: (value: iUser | null) => void;
  usersFilter: iUser[];
  setUsersFilter: (value: iUser[]) => void;
}

export interface iUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  user: iUser | null;
}

export interface IFormModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
