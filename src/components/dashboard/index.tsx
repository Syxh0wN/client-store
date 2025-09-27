import { useSpring } from "react-spring";
import {
  Body,
  Card,
  DashboardWrapper,
  HeaderDash,
  Image,
  InfoRow,
  LabelDash,
  Name,
  TextDash,
} from "../../styles/dashboard";

import userLogo from "../../assets/user/user.png";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { AdminDashboard } from "../dashboard_admin";
import { BodyAdmin } from "../../styles/dashboard_admin";

// So e chamado se usar o navigate
export const Dashboard = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 600 },
  });

  const { user } = useContext(AuthContext);

  function formatDate(created_at: string): string {
    const date: Date = parseISO(created_at);
    return format(date, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
  }

  return (
    <>
      {!user?.isAdmin ? (
        <Body>
          <DashboardWrapper>
            <Card style={animation}>
              <HeaderDash>
                <Name>{user?.name}</Name>
                <Image src={userLogo} alt="User" />
              </HeaderDash>
              <InfoRow>
                <LabelDash>Email:</LabelDash>
                <TextDash>{user?.email}</TextDash>
              </InfoRow>
              <InfoRow>
                <LabelDash>Telefone:</LabelDash>
                <TextDash>{user?.phone}</TextDash>
              </InfoRow>
              <InfoRow>
                <LabelDash>Criado em:</LabelDash>
                <TextDash>
                  {user?.created_at
                    ? formatDate(user?.created_at)
                    : "Undefined"}
                </TextDash>
              </InfoRow>
              <InfoRow>
                <LabelDash>Cliente da loja? </LabelDash>
                <TextDash>{user?.client ? "Sim" : "Não"}</TextDash>
              </InfoRow>
              {user?.client && (
                <>
                  <InfoRow>
                    <LabelDash>Rua:</LabelDash>
                    <TextDash>{user.client.address.street}</TextDash>
                  </InfoRow>
                  <InfoRow>
                    <LabelDash>Bairro:</LabelDash>
                    <TextDash>{user.client.address.neighborhood}</TextDash>
                  </InfoRow>
                  <InfoRow>
                    <LabelDash>Número:</LabelDash>
                    <TextDash>{user.client.address.number}</TextDash>
                  </InfoRow>
                  <InfoRow>
                    <LabelDash>Complemento:</LabelDash>
                    <TextDash>{user.client.address.complement}</TextDash>
                  </InfoRow>
                  <InfoRow>
                    <LabelDash>CEP:</LabelDash>
                    <TextDash>{user.client.address.cep}</TextDash>
                  </InfoRow>
                  <InfoRow>
                    <LabelDash>Cidade:</LabelDash>
                    <TextDash>{user.client.address.city}</TextDash>
                  </InfoRow>
                  <InfoRow>
                    <LabelDash>Estado:</LabelDash>
                    <TextDash>{user.client.address.state}</TextDash>
                  </InfoRow>
                </>
              )}
            </Card>
          </DashboardWrapper>
        </Body>
      ) : (
        <BodyAdmin>
          <AdminDashboard />
        </BodyAdmin>
      )}
    </>
  );
};
