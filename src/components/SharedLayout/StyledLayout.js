import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 20px;
  padding-bottom: 70px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: var(--accent-blue);
  height: 50px;
  padding-top: 10px;
`;

export const StyledNavlink = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  color: var(--white);
  transition: transform var(--transition-duration);

  &:hover,
  &:focus {
    transform: scale(1.15);
  }

  &.active {
    color: var(--hover-blue);
  }
`;
