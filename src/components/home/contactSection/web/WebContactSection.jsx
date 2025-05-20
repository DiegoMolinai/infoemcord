import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  Alert,
  Paper,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import CustomDialog from "../../../../ui/customDialog/CustomDialog";
import contactSectionConfig from "../../../../config/home/contactSectionConfig";
import config from "../../../../config/config";
import iconMap from "../../../../config/iconMap";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const WebContactSection = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .swiper-button-prev,
      .swiper-button-next {
        color: ${contactSectionConfig.swiperSettings.navigationColor};
        transition: color 0.3s ease;
      }
      .swiper-button-prev:hover,
      .swiper-button-next:hover {
        color: ${contactSectionConfig.swiperSettings.navigationHoverColor};
      }
      .swiper-pagination-bullet {
        background-color: ${contactSectionConfig.swiperSettings.bulletColor};
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background-color: ${contactSectionConfig.swiperSettings.bulletActiveColor};
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="contact" style={{ marginTop: "2rem" ,}}>
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
          {contactSectionConfig.heading}
        </Typography>

        <Paper
          sx={{
            mt: 4,
            p: 4,
            borderRadius: 2,
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
          <Grid container spacing={4} alignItems="center">
            {/* Columna izquierda */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Box>
                  <Typography
                    variant="h6"
                    color="action"
                    fontWeight={600}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    {/* <EmailIcon fontSize="medium" /> */}
                    ¿Por qué contactarnos?
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    Nuestro equipo está disponible para ayudarte con servicios,
                    dudas técnicas y agendamientos. Estamos comprometidos con
                    una atención rápida y profesional.
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    color="action"
                    fontWeight={600}
                    gutterBottom
                  >
                    Contacto directo
                  </Typography>
                  <Stack spacing={1}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <PhoneIcon color="success" fontSize="medium" />
                      <Typography variant="body1">
                        {config.contact.phone}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <EmailIcon color="info" fontSize="medium" />
                      <Typography variant="body1">
                        {config.contact.email}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <PlaceIcon color="error" fontSize="medium" />
                      <Typography variant="body1">
                        {config.contact.address}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    color="action"
                    fontWeight={600}
                    gutterBottom
                  >
                    ¿Qué ofrecemos?
                  </Typography>
                  <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
                    <li>
                      <Typography variant="body1">
                        Atención personalizada y sin esperas.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Taller certificado con más de 15 años de experiencia.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Respuestas claras y en menos de 24 horas.
                      </Typography>
                    </li>
                  </ul>
                </Box>

                <Stack spacing={2} direction="row">
                  {contactSectionConfig.buttons.map((btn, idx) => {
                    if (btn.text !== "WhatsApp") {
                      return
                    }
                    const isModal = btn.text.toLowerCase() === "contactar";
                    const IconComponent = iconMap[btn.iconName];

                    return (
                      <Button
                        key={idx}
                        variant={btn.variant}
                        fullWidth
                        startIcon={IconComponent ? <IconComponent /> : null}
                        onClick={isModal ? () => setOpen(true) : undefined}
                        href={!isModal ? btn.link : undefined}
                        target={
                          !isModal && btn.link.includes("wa.me")
                            ? "_blank"
                            : "_self"
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
                                backgroundColor:
                                  btn.backgroundColor ||
                                  config.colors.secondary,
                                color: config.colors.primary,
                                "&:hover": {
                                  backgroundColor:
                                    btn.backgroundColorHover ||
                                    config.colors.accent,
                                },
                              }),
                        }}
                      >
                        {btn.text}
                      </Button>
                    );
                  })}
                </Stack>
              </Stack>
            </Grid>

            {/* Columna derecha: carrusel */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                loop
                effect="fade"
                autoplay={{
                  delay: contactSectionConfig.swiperSettings.autoplayDelay,
                }}
                pagination={{ clickable: true }}
                navigation
                style={{ borderRadius: 12, overflow: "hidden" }}
              >
                {contactSectionConfig.slides.map((slide, idx) => {
                  const hasBackground = Boolean(slide.backgroundImage);
                  return (
                    <SwiperSlide key={idx}>
                      <Box
                        sx={{
                          height: 400,
                          // width: "100%",
                          backgroundImage: hasBackground
                            ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.backgroundImage})`
                            : undefined,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundColor: !hasBackground
                            ? config.colors.primary
                            : undefined,
                          borderRadius: 2,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          p: 3,
                          position: "relative",
                          color: config.colors.secondary,
                        }}
                      >
                        {!hasBackground && (
                          <BrokenImageIcon
                            sx={{
                              fontSize: { xs: 120, md: 180 },
                              color: "rgba(255,255,255,0.1)",
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              zIndex: 0,
                            }}
                          />
                        )}
                        <Box sx={{ zIndex: 1 }}>
                          <Typography
                            variant="h5"
                            fontWeight={700}
                            gutterBottom
                          >
                            {slide.title}
                          </Typography>
                          <Typography variant="h6" mb={3}>
                            {slide.subtitle}
                          </Typography>
                          <Button
                            href={slide.buttonLink}
                            variant="contained"
                            sx={{
                              backgroundColor: config.colors.secondary,
                              color: config.colors.primary,
                              fontWeight: 600,
                              fontSize: "1rem",
                              "&:hover": {
                                backgroundColor: config.colors.accent,
                              },
                            }}
                          >
                            {slide.buttonText}
                          </Button>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Grid>
          </Grid>
        </Paper>

        {/* Modal informativo sin formulario */}
        <CustomDialog
          open={open}
          onClose={() => setOpen(false)}
          title="Contáctanos"
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
            sx={{ mb: 2, border: 1, borderColor: "info.main" }}
          >
            Puedes comunicarte con nosotros por los siguientes medios:
          </Alert>

          <Stack spacing={2} sx={{ px: 1 }}>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <EmailIcon color="info" />
              <Typography variant="body1">
                <strong>Correo:</strong>
                <br />
                {config.contact.email}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <PhoneIcon color="success" />
              <Typography variant="body1">
                <strong>Teléfono:</strong>
                <br />
                {config.contact.phone}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <PlaceIcon color="error" />
              <Typography variant="body1">
                <strong>Dirección:</strong>
                <br />
                {config.contact.address}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <AccessTimeIcon color="warning" />
              <Typography variant="body1">
                <strong>Horario:</strong>
                <br />
                {config.contact.extra}
              </Typography>
            </Box>
          </Stack>
        </CustomDialog>
      </Box>
    </section>
  );
};

export default WebContactSection;
