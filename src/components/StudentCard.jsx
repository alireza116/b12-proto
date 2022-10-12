import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";

export default function StudentCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", marginBottom: "20px", alignItems: "center" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://static.thenounproject.com/png/4105072-200.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Name
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Alireza Karduni
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Major
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Computer Science
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
