import styled from "styled-components";
import { motion } from "framer-motion";

export const BodyAdmin = styled.main`
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: #f0f0f0;
  padding: 1rem;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const MenuAdmin = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
`;

export const MenuItem = styled.li`
  list-style: none;
`;

export const MenuLink = styled.a`
  display: block;
  color: #0077cc;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 119, 204, 0.1);
  }
`;

export const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
