import {
  DashboardContainer,
  itemVariants,
  MainContent,
  MenuAdmin,
  MenuItem,
  MenuLink,
  menuVariants,
} from "../../styles/dashboard_admin";

import { motion } from "framer-motion";
import { UserListWithPagination } from "../listusers";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const AdminDashboard: React.FC = () => {
  const { setmenuSelect } = useContext(AuthContext);

  return (
    <>
      <DashboardContainer>
        <MainContent>
          <MenuAdmin variants={menuVariants} initial="hidden" animate="visible">
            <MenuItem>
              <motion.div variants={itemVariants}>
                <MenuLink onClick={() => setmenuSelect("users")}>
                  Todos usuários
                </MenuLink>
              </motion.div>
            </MenuItem>
            <MenuItem>
              <motion.div variants={itemVariants}>
                <MenuLink onClick={() => setmenuSelect("clients")}>
                  Todos Clientes
                </MenuLink>
              </motion.div>
            </MenuItem>
            <MenuItem>
              <motion.div variants={itemVariants}>
                <MenuLink onClick={() => setmenuSelect("client_register")}>
                  Cadastrar Cliente
                </MenuLink>
              </motion.div>
            </MenuItem>
          </MenuAdmin>
        </MainContent>
      </DashboardContainer>
      <UserListWithPagination />
    </>
  );
};
