import {
    Box,
    Typography,
    Paper,
    Stack,
    Button,
    Divider,
  } from "@mui/material";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import AccessTimeIcon from "@mui/icons-material/AccessTime";
  import DirectionsIcon from "@mui/icons-material/Directions";
  import PhoneIcon from "@mui/icons-material/Phone";
  
  import config from "../../../../config/config";
  import locationSectionConfig from "../../../../config/home/locationSectionConfig";
  
  const MobileLocationSection = () => {
    return (
      <section id="location" style={{ marginTop: "2rem", scrollMarginTop: "80px"  }}>
        <Box
          sx={{
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
              mt: 3,
              p: 3,
              borderRadius: 4,
              border: `1px solid ${config.colors.accent}`,
              backgroundColor: config.colors.secondary,
              transition: "all 0.4s ease",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Stack spacing={2}>
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOnIcon color="error" />
                <Typography>{config.contact.address}</Typography>
              </Box>
  
              <Box display="flex" alignItems="center" gap={1}>
                <PhoneIcon color="success" />
                <Typography>{config.contact.phone}</Typography>
              </Box>
  
              <Box>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <AccessTimeIcon color="warning" />
                  <Typography fontWeight={700}>Horarios de Atención</Typography>
                </Box>
                <Box
                  sx={{
                    border: `1px solid ${config.colors.accent}`,
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  {locationSectionConfig.openingHours.map(({ day, hours }, i) => (
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
                  ))}
                </Box>
              </Box>
  
              <Divider />
  
              <Box>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <DirectionsIcon color="info" />
                  <Typography fontWeight={700}>Cómo llegar</Typography>
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
                  backgroundColor: config.colors.primary,
                  color: config.colors.secondary,
                  "&:hover": {
                    backgroundColor: config.colors.primaryLight,
                  },
                }}
              >
                Ver en Google Maps
              </Button>
  
              <Box
                component="iframe"
                src={locationSectionConfig.iframeSrc}
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sx={{
                  border: 0,
                  borderRadius: 2,
                }}
              />
            </Stack>
          </Paper>
        </Box>
      </section>
    );
  };
  
  export default MobileLocationSection;
  