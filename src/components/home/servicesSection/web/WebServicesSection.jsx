import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import servicesSectionConfig from "../../../../config/home/servicesSectionConfig";
import iconMap from "../../../../config/iconMap";
import config from "../../../../config/config";

const WebServicesSection = () => {
  return (
    <section id="services" style={{ marginTop: "2rem" }}>
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

        <Grid container spacing={4} mt={3}>
          {servicesSectionConfig.map((service, index) => {
            const IconComponent = iconMap[service.iconName];

            return (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: config.colors.secondary,
                    color: config.colors.textPrimary,
                    border: `1px solid ${config.colors.accent}`,
                    borderRadius: 4,
                    py: 4,
                    px: 2,
                    transition: "all 0.4s ease",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 10px 24px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  {IconComponent && (
                    <Box
                      sx={{
                        backgroundColor: config.colors.accent,
                        borderRadius: "50%",
                        width: 80,
                        height: 80,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      <IconComponent fontSize="large" />
                    </Box>
                  )}

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: config.colors.textSecondary,
                        mt: 1,
                        px: 1,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </section>
  );
};

export default WebServicesSection;
