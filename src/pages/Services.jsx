import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const Services = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Nuestros Servicios
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Cambio de Aceite</Typography>
              <Typography variant="body2">Mantenimiento preventivo de tu motor.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Alineación y Balanceo</Typography>
              <Typography variant="body2">Mejora el desempeño de tus neumáticos.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
