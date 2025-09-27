import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  Pagination,
  PaginationButton,
  UserCard,
  UserEmail,
  UserGrid,
  UserListContainer,
  UserName,
} from "../../styles/listusers";
import { UserModal } from "../modal_info_user";
import { FormModal } from "../model_register_client";

export const UserListWithPagination: React.FC = () => {
  const {
    users,
    selectedUser,
    setSelectedUser,
    menuSelect,
    usersFilter,
    setUsersFilter,
  } = useContext(AuthContext);

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(usersFilter.length / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const displayedUsers = usersFilter.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (menuSelect === "users") {
      setUsersFilter(users || []);
    } else if (menuSelect === "clients") {
      setUsersFilter(users!.filter((user) => user.client));
    } else if (menuSelect === "client_register") {
      setUsersFilter(users!.filter((user) => !user.client));
    }
  }, [menuSelect, users, setUsersFilter]);

  return (
    <>
      <UserListContainer>
        <UserGrid>
          {displayedUsers.map((user, index) => (
            <UserCard key={index} onClick={() => setSelectedUser(user)}>
              <UserName>
                {user.name
                  .toLowerCase()
                  .replace(/(?:^|\s)\S/g, (initial) => initial.toUpperCase())}
              </UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserCard>
          ))}
        </UserGrid>
        <Pagination>
          <PaginationButton
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Anterior
          </PaginationButton>
          <PaginationButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Próximo
          </PaginationButton>
        </Pagination>
      </UserListContainer>

      {menuSelect !== "client_register" ? (
        <UserModal
          isOpen={!!selectedUser}
          onRequestClose={handleCloseModal}
          user={selectedUser}
        />
      ) : (
        <FormModal isOpen={!!selectedUser} onRequestClose={handleCloseModal} />
      )}
    </>
  );
};
