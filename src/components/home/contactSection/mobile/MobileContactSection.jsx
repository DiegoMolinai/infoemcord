import { useState } from "react";
import { Box, Typography, Button, Stack, Alert } from "@mui/material";
import contactSectionConfig from "../../../../config/home/contactSectionConfig";
import config from "../../../../config/config";
import iconMap from "../../../../config/iconMap";
import CustomDialog from "../../../../ui/customDialog/CustomDialog";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const MobileContactSection = () => {
  const [open, setOpen] = useState(false);

  const { email, phone, address, extra } = config.contact;

  return (
    <section id="contact" style={{ marginTop: "2rem" , scrollMarginTop: "80px"   }}>
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        gutterBottom
        sx={{ color: config.colors.secondary }}
      >
        {contactSectionConfig.heading}
      </Typography>

      <Box
        sx={{
          backgroundColor: config.colors.primary,
          borderRadius: 2,
          mt: 4,
          p: 4,
          color: config.colors.secondary,
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Typography variant="body2" mb={3}>
          {contactSectionConfig.message}
          <br />
          Llámanos al {config.contact.phone}
        </Typography>

        <Stack spacing={2}>
          {contactSectionConfig.buttons.map((btn, idx) => {
            const isModal = btn.text.toLowerCase() === "contactar";
            const IconComponent = iconMap[btn.iconName];

            return (
              <Button
                key={idx}
                fullWidth
                variant={btn.variant}
                startIcon={IconComponent ? <IconComponent /> : null}
                onClick={isModal ? () => setOpen(true) : undefined}
                href={!isModal ? btn.link : undefined}
                target={
                  !isModal && btn.link.includes("wa.me") ? "_blank" : "_self"
                }
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                  py: 1.5,
                  ...(btn.variant === "outlined"
                    ? {
                        color: config.colors.secondary,
                        borderColor: config.colors.secondary,
                        "&:hover": {
                          backgroundColor: config.colors.accent,
                          color: config.colors.textPrimary,
                        },
                      }
                    : {
                        backgroundColor: btn.backgroundColor,
                        color: config.colors.primary,
                        "&:hover": {
                          backgroundColor: btn.backgroundColorHover,
                        },
                      }),
                }}
              >
                {btn.text}
              </Button>
            );
          })}
        </Stack>
      </Box>

      <CustomDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Información de Contacto"
        actions={[
          {
            label: "Cerrar",
            onClick: () => setOpen(false),
            color: "primary",
            variant: "contained",
          },
        ]}
      >
        <Alert
          severity="info"
          sx={{ mb: 2, border: 2, borderColor: "info.main" }}
        >
          Estamos disponibles para ayudarte. Aquí tienes nuestros datos de
          contacto:
        </Alert>

        <Stack spacing={2} sx={{ px: 1 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <EmailIcon color="info" />
            <Typography variant="body2">
              <strong>Correo:</strong>
              <br />
              {email}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <PhoneIcon color="success" />
            <Typography variant="body2">
              <strong>Teléfono:</strong>
              <br />
              {phone}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <PlaceIcon color="error" />
            <Typography variant="body2">
              <strong>Dirección:</strong>
              <br />
              {address}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <AccessTimeIcon color="warning" />
            <Typography variant="body2">
              <strong>Horario:</strong>
              <br />
              {extra}
            </Typography>
          </Box>
        </Stack>
      </CustomDialog>
    </section>
  );
};

export default MobileContactSection;
