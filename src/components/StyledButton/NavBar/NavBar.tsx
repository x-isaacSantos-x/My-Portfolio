import styled from "@emotion/styled";
import { AppBar, MenuItem, Toolbar } from "@mui/material"


const NavBar = () => {

      const StyleToobar = styled(Toolbar)(() => ({
            display: "flex",
            justifyContent: "space-evenly"
  }));


  return (
    <>
      <AppBar position="absolute">
            <StyleToobar>
            <MenuItem>About</MenuItem>
            <MenuItem>Habilidades</MenuItem>
            <MenuItem>Projetos</MenuItem>
            </StyleToobar>
      </AppBar>
    </>
  )
}

export default NavBar
