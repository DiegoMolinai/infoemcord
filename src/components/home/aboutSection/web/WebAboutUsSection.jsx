import { Box, Typography, Paper, Grid } from "@mui/material";
import aboutUsSectionConfig from "../../../../config/home/aboutUsSectionConfig";
import config from "../../../../config/config";
import iconMap from "../../../../config/iconMap";

const WebAboutUsSection = () => {
  return (
    <section id="about" style={{ marginTop: "2rem" }}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: 6,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          gutterBottom
          sx={{ color: config.colors.secondary, mb: 2 }}
        >
          {aboutUsSectionConfig.heading}
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          maxWidth="md"
          mx="auto"
          mb={6}
          sx={{ color: config.colors.secondary }}
        >
          {aboutUsSectionConfig.description}
        </Typography>

        {/* Valores */}
        <Grid container spacing={4}>
          {aboutUsSectionConfig.values.map((item, index) => {
            const Icon = iconMap[item.iconName];
            return (
              <Grid item size={{ xs: 12, md: 4, sm:6}} key={index}>
                <Paper sx={cardStyle}>
                  {Icon && <Icon className="card-icon" sx={{ fontSize: 50, mb: 2 }} />}
                  <Typography variant="h6" className="card-title" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className="card-text" mb={2}>
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Misión y Visión */}
        <Grid container spacing={4} mt={4}>
          {[aboutUsSectionConfig.mission, aboutUsSectionConfig.vision].map((section, idx) => {
            const Icon = iconMap[section.iconName];
            return (
              <Grid item size={{ xs: 12, md: 6 }} key={idx}>
                <Paper sx={cardStyle}>
                  {Icon && <Icon className="card-icon" sx={{ fontSize: 60, mb: 2 }} />}
                  <Typography variant="h6" className="card-title" gutterBottom>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" className="card-text">
                    {section.text}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </section>
  );
};

const cardStyle = {
  p: 4,
  borderRadius: 4,
  backgroundColor: config.colors.primaryLight,         // blanco por defecto
  border: `2px solid ${config.colors.accent}`,       // borde gris claro
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",        // sombra negra por defecto
  textAlign: "center",
  transition: "all 0.3s ease",
  "& .card-icon": {
    color: config.colors.secondary,                     // ícono gris claro
    transition: "color 0.3s ease",
  },
  "& .card-title": {
    color: config.colors.secondary,                // título negro
    transition: "color 0.3s ease",
  },
  "& .card-text": {
    color: config.colors.secondary,              // texto secundario
    transition: "color 0.3s ease",
  },
  "&:hover": {
    backgroundColor: config.colors.secondary,       // gris claro en hover
    borderColor: "#FFF",              // borde gris oscuro en hover
    boxShadow: "0 12px 24px rgba(255, 255, 255, 0.5)",// sombra blanca en hover
    transform: "translateY(-8px)",
    "& .card-icon": {
      color: config.colors.primary,                  // ícono gris oscuro al hover
    },
    "& .card-title": {
      color: config.colors.primary,                  // título gris oscuro al hover
    },
    "& .card-text": {
      color: config.colors.primary,              // texto negro al hover
    },
  },
};

export default WebAboutUsSection;
