import styled, { keyframes } from "styled-components"; // ✅ Import keyframes
import { Link } from "react-router-dom";

// ✅ Define the animation using keyframes
const spinnerAnim = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  display: table;
  align-self: center;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: black;
`;

export const SimpleSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const Spinner = styled.span`
  width: 30px;
  height: 30px;
  border: 3px solid transparent;
  border-radius: 50%;
  border-right-color: rgba(0, 0, 0, 0.7);
  animation: ${spinnerAnim} 0.8s linear infinite;
`;