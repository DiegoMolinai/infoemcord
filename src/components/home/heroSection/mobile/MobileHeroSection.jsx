import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules"; // ⛔ sin Navigation
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import heroSectionConfig from "../../../../config/home/heroSectionConfig";
import config from "../../../../config/config";
import { Box, Typography, Button } from "@mui/material";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

const MobileHeroSection = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .swiper-pagination-bullet {
        background-color: ${heroSectionConfig.swiperSettings.bulletColor};
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background-color: ${heroSectionConfig.swiperSettings.bulletActiveColor};
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="hero" style={{ scrollMarginTop: "100px" }}>
      <Box sx={{ width: "100%", overflowX: "hidden" }}>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]} // 👈 sin Navigation
          loop
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: heroSectionConfig.swiperSettings.autoplayDelay }}
          pagination={{ clickable: true }}
          style={{ width: "100%" }}
        >
          {heroSectionConfig.slides.map((slide, index) => {
            const hasBackground = Boolean(slide.backgroundImage);

            return (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    borderRadius: 4,
                    border:2,
                    minHeight: "90dvh",
                    backgroundImage: hasBackground
                      ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.backgroundImage})`
                      : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: config.colors.secondary,
                    textAlign: "center",
                    position: "relative",
                    backgroundColor: !hasBackground
                      ? config.colors.primary
                      : undefined,
                  }}
                >
                  {!hasBackground && (
                    <BrokenImageIcon
                      sx={{
                        fontSize: { xs: 100, sm: 140 },
                        color: "rgba(255,255,255,0.1)",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 0,
                      }}
                    />
                  )}

                  <Box sx={{ zIndex: 1, px: 2 }}>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                      {slide.title}
                    </Typography>
                    <Typography variant="body1" mb={3}>
                      {slide.subtitle}
                    </Typography>
                    <Button
                      href={slide.buttonLink}
                      variant="contained"
                      sx={{
                        backgroundColor: config.colors.secondary,
                        color: config.colors.primary,
                        fontWeight: 600,
                        "&:hover": { backgroundColor: config.colors.accent },
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
      </Box>
    </section>
  );
};

export default MobileHeroSection;
