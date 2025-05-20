import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import config from "../../config/config";

const iconMap = {
  Inicio: <HomeIcon />,
  Servicios: <BuildIcon />,
  "Sobre Nosotros": <InfoIcon />,
  Contacto: <ContactMailIcon />,
};

const Header = () => {
  const sections = config.navSections;
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    setOpen(false);
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
          backdropFilter: "blur(8px)",
          //   backgroundColor: config.colors.primary,
          borderBottom: `2px solid ${config.colors.accent}`,
          color: config.colors.secondary,
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          {/* Logo y nombre */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src={config.logo}
              alt="Logo FMEC"
              sx={{ height: 55 }}
            />
            {/* <Typography
              variant="h6"
              fontWeight={700}
              sx={{ color: config.colors.secondary }}
            >
              {config.appName}
            </Typography> */}
          </Box>

          {/* Navegación de escritorio */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                sx={{
                  color: config.colors.secondary,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                  position: "relative",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: config.colors.accent,
                    transition: "width 0.3s",
                  },
                  "&:hover::before": {
                    width: "100%",
                  },
                  "&:hover": {
                    // color: config.colors.textPrimary,
                    backgroundColor: "rgba(255,255,255,0.04)",
                  },
                }}
              >
                {section.label}
              </Button>
            ))}
          </Box>

          {/* Menú mobile */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: config.colors.primary,
            color: config.colors.secondary,
            width: 260,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" textAlign="center">
            Navegación
          </Typography>
          <Divider sx={{ my: 2, backgroundColor: config.colors.accent }} />
          <List>
            {sections.map((section) => (
              <ListItem key={section.id} disablePadding>
                <ListItemButton onClick={() => scrollToSection(section.id)}>
                  <ListItemIcon sx={{ color: config.colors.accent }}>
                    {iconMap[section.label] || <MenuIcon />}
                  </ListItemIcon>
                  <ListItemText primary={section.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
