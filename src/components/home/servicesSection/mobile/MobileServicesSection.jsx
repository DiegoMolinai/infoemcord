import {
    Box,
    Typography,
    Stack,
    Paper,
  } from "@mui/material";
  import servicesSectionConfig from "../../../../config/home/servicesSectionConfig";
  import iconMap from "../../../../config/iconMap";
  import config from "../../../../config/config";
  
  const MobileServicesSection = () => {
    return (
      <section id="services" style={{ marginTop: "2rem" , scrollMarginTop: "80px"  }}>
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
            Nuestros Servicios
          </Typography>
  
          <Stack spacing={3} mt={4}>
            {servicesSectionConfig.map((service, index) => {
              const Icon = iconMap[service.iconName];
              return (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: config.colors.secondary,
                    border: `1px solid ${config.colors.accent}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  {Icon && (
                    <Box
                      sx={{
                        backgroundColor: config.colors.accent,
                        borderRadius: "50%",
                        width: 70,
                        height: 70,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <Icon fontSize="medium" />
                    </Box>
                  )}
                  <Typography variant="h6" fontWeight={700}>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    mt={1}
                    sx={{ color: config.colors.textSecondary }}
                  >
                    {service.description}
                  </Typography>
                </Paper>
              );
            })}
          </Stack>
        </Box>
      </section>
    );
  };
  
  export default MobileServicesSection;
  