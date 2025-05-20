import { Box, Typography, Paper, Stack } from "@mui/material";
import aboutUsSectionConfig from "../../../../config/home/aboutUsSectionConfig";
import config from "../../../../config/config";
import iconMap from "../../../../config/iconMap";

const MobileAboutUsSection = () => {
  return (
    <section id="about" style={{ marginTop: "2rem" , scrollMarginTop: "80px" }}>
      <Box>
        <Typography variant="h5" fontWeight={700} textAlign="center" gutterBottom sx={{ color: config.colors.secondary }}>
          {aboutUsSectionConfig.heading}
        </Typography>

        <Typography variant="body2" textAlign="center" mx={2} mb={4} sx={{ color: config.colors.secondary }}>
          {aboutUsSectionConfig.description}
        </Typography>

        <Stack spacing={3} mx={2}>
          {aboutUsSectionConfig.values.map((item, index) => {
            const Icon = iconMap[item.iconName];
            return (
              <Paper key={index} elevation={2} sx={paperCardStyle}>
                {Icon && <Icon sx={{ fontSize: 36, mb: 1, color: config.colors.primary }} />}
                <Typography variant="subtitle1" fontWeight={600}>{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">{item.text}</Typography>
              </Paper>
            );
          })}
        </Stack>

        <Stack spacing={3} mt={6} mx={2}>
          {[aboutUsSectionConfig.mission, aboutUsSectionConfig.vision].map((section, idx) => {
            const Icon = iconMap[section.iconName];
            return (
              <Paper key={idx} elevation={2} sx={paperCardStyle}>
                {Icon && <Icon sx={{ fontSize: 42, mb: 1, color: config.colors.primary }} />}
                <Typography variant="subtitle1" fontWeight={700}>{section.title}</Typography>
                <Typography variant="body2" color="textSecondary">{section.text}</Typography>
              </Paper>
            );
          })}
        </Stack>
      </Box>
    </section>
  );
};

const paperCardStyle = {
  p: 3,
  borderRadius: 2,
  backgroundColor: config.colors.secondary,
  border: `1px solid ${config.colors.accent}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.2)",
  },
};

export default MobileAboutUsSection;
