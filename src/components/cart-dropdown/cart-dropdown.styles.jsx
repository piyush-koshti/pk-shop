import styled from "styled-components";
import { 
  ButtonContainer, 
  GoogleSignInButton, 
  InvertedButton 
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(18, 14, 14, 0.2);
    border-radius: 25px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(18, 14, 14, 0.5);
    border-radius: 25px;
  }

  ${ ButtonContainer },
  ${ GoogleSignInButton },
  ${ InvertedButton } {
    margin-top: auto;
    width: 100%;
  }
`;  

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
  