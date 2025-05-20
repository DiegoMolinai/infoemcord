import { Box, Typography, Paper, Grid, Stack, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsIcon from "@mui/icons-material/Directions";
import PhoneIcon from "@mui/icons-material/Phone";

import config from "../../../../config/config";
import locationSectionConfig from "../../../../config/home/locationSectionConfig";

const WebLocationSection = () => {
  return (
    <section id="location" style={{ marginTop: "2rem" }}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          gutterBottom
          sx={{ color: config.colors.secondary }}
        >
          {locationSectionConfig.heading}
        </Typography>

        <Paper
          elevation={3}
          sx={{
            mt: 4,
            p: { xs: 2, md: 4 },
            overflow: "hidden",
            borderRadius: 4,
            border: `1px solid ${config.colors.accent}`,
            backgroundColor: config.colors.secondary,
            transition: "all 0.4s ease",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 10px 24px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Grid container spacing={4}>
            {/* 🧾 Información */}
            <Grid item size={{ xs: 12, md: 5 }}>
              <Stack spacing={2}>
                <Box display="flex" alignItems="center" gap={1}>
                  <LocationOnIcon color="error" />
                  <Typography variant="body1">
                    {config.contact.address}
                  </Typography>
                </Box>

                {/* <Box display="flex" alignItems="center" gap={1}>
                  <PhoneIcon color="success" />
                  <Typography variant="body1">
                    {config.contact.phone}
                  </Typography>
                </Box> */}

                {/* 🕑 Tabla de horarios */}
                <Box mt={3}>
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    sx={{
                      backgroundColor: config.colors.primary,
                      color: config.colors.secondary,
                      px: 2,
                      py: 1,
                      borderRadius: "4px 4px 0 0",
                      // width: "fit-content",
                    }}
                  >
                    Horarios de Atención
                  </Typography>

                  <Box
                    sx={{
                      border: `1px solid ${config.colors.accent}`,
                      borderTop: "none",
                      borderRadius: "0 0 4px 4px",
                      overflow: "hidden",
                      // mt: 0.5,
                    }}
                  >
                    {locationSectionConfig.openingHours.map(
                      ({ day, hours }, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            px: 2,
                            py: 1,
                            backgroundColor:
                              i % 2 === 0
                                ? config.colors.background
                                : config.colors.secondary,
                          }}
                        >
                          <Typography variant="body2">{day}</Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontStyle:
                                hours.toLowerCase() === "cerrado"
                                  ? "italic"
                                  : "normal",
                              color:
                                hours.toLowerCase() === "cerrado"
                                  ? "#888"
                                  : "inherit",
                            }}
                          >
                            {hours}
                          </Typography>
                        </Box>
                      )
                    )}
                  </Box>
                </Box>

                {/* 🧭 Instrucciones */}
                <Box mt={2}>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <DirectionsIcon color="info" />
                    <Typography variant="subtitle1" fontWeight={700}>
                      Cómo llegar
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    {locationSectionConfig.instructions}
                  </Typography>
                </Box>

                <Button
                  href={locationSectionConfig.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    mt: 3,
                    backgroundColor: config.colors.primary,
                    color: config.colors.secondary,
                    "&:hover": {
                      backgroundColor: config.colors.primaryLight,
                    },
                  }}
                >
                  Ver en Google Maps
                </Button>
              </Stack>
            </Grid>

            {/* 🌍 Mapa */}
            <Grid item size={{ xs: 12, md: 7 }}>
              <Box
                component="iframe"
                src={locationSectionConfig.iframeSrc}
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sx={{
                  minHeight: { xs: 300, md: 450 },
                  border: 0,
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </section>
  );
};

export default WebLocationSection;
