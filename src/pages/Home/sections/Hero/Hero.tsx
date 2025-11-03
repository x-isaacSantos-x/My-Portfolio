import { Container, styled, Typography, Grid, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Avatar from "../../../../assets/images/fotoisaac.jpg";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display:"flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },

    [theme.breakpoints.up('md')]: {
            display: "block",
            padding: "20px",
            paddingTop: "0px",
            paddingBottom: "40px",
        },

  }));



  const StyledImg = styled("img")(({theme}) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        {/* Grid principal */}
        <Grid container spacing={2}>
          {/* Coluna da imagem */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                    <StyledImg src={Avatar} />
                </Box>
            </Box>
            
          </Grid>

          {/* Coluna do texto e botões */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
              pb={2}
            >
              Isaac Mendes
            </Typography>
            <Typography
              color="primary.contrastText"
              variant="h2"
              textAlign="center"
            >
              E sou Engenheiro de Software
            </Typography>

            {/* Container dos botões */}
            <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }} pt={3}>
              <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center" >
                <StyledButton>
                  <MailOutlineIcon />
                  <Typography>Fale Comigo</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
