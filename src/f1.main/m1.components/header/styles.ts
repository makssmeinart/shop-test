import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled("header")`
  height: 55px;
  background-color: rgba(255, 255, 255, 0.95);
  color: black;
`;

export const ProdLink = styled(Link)`
  text-decoration: none;
  color: #333333;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s ease color;

  :hover {
    color: cornflowerblue;
  }
`;
