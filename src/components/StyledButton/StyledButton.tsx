import { styled } from '@mui/material/styles';
import type { ReactNode } from 'react';


interface StyledButtonProps {
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {


const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "5px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  cursor: "pointer",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "green",
    color: "#fff",
    borderColor: "green",
  },
}));




  return (
    <>
      <StyledButton>
        {children}
      </StyledButton>
    </>
  )
}

export default StyledButton
