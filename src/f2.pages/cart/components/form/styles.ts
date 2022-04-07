import {Grid, styled} from "@mui/material";

export const FormWrapper = styled(Grid)`
background-color: white;
`

export const CurrentForm = styled("form")`
  padding: 1rem;
`

export const CommonInput = styled("input")`
  padding: .5rem;
  
  :focus {
    outline: none;
  }
  
  ::placeholder {
    text-transform: uppercase;
    color: #333333;
  }
`