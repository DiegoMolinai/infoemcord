import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import config from "../../config/config";
import scrollToSection from "../../utils/scrollToSection"; // ✅
import iconMap from "../../config/iconMap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Sobre Nosotros", id: "about" },
    { label: "Servicios", id: "services" },
    { label: "Ubicación", id: "location" },
    { label: "Contacto", id: "contact" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        pb: 4,
        backgroundColor: config.colors.primary,
        color: config.colors.secondary,
        borderTop: `2px solid ${config.colors.accent}`,
      }}
    >
      <Divider
          sx={{
            width: 80,
            height: 4,
            backgroundColor: config.colors.accent,
            borderRadius: 2,
            mx: "auto",
            my: 2,
          }}
        />
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Info general */}
          <Grid item size={{xs:12,md:4}}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              {config.appName}
            </Typography>
            <Typography variant="body2" color={config.colors.secondary}>
              Somos un taller comprometido con la calidad y el servicio al
              cliente. ¡Confía en nosotros para cuidar tu vehículo!
            </Typography>
          </Grid>

          {/* Contacto */}
          <Grid item size={{xs:12,sm:6,md:4}}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Contacto
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">
                  {config.contact.address}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">{config.contact.phone}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">{config.contact.email}</Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Enlaces útiles */}
          <Grid item size={{xs:12,sm:6,md:4}}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Enlaces Útiles
            </Typography>
            <Stack spacing={1}>
              {navLinks.map((link) => (
                <Typography
                  key={link.id}
                  variant="body2"
                  component="button"
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "inherit",
                    textAlign: "left",
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="body2"
              textAlign={{ xs: "center", md: "left" }}
            >
              © {currentYear} {config.appName} - Todos los derechos reservados.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              {config.socialLinks
                .filter((link) => link.active)
                .map((link) => {
                  const Icon = iconMap[link.iconName];
                  return (
                    Icon && (
                      <IconButton
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: config.colors.secondary,
                          "&:hover": {
                            color: config.colors.accent,
                          },
                        }}
                      >
                        <Icon />
                      </IconButton>
                    )
                  );
                })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
