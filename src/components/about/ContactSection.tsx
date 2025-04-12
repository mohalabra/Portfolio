import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as AddressIcon,
} from "@mui/icons-material";
import Link from "next/link";

const ContactSection = () => {
  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Email Card */}
        <Grid item xs={12} sm={6} md={4} className="hover:animate-scale">
          <Card sx={{ height: "100%", boxShadow: 3 }}>
            <CardContent sx={{ textAlign: "center", p: 4 }}>
              <EmailIcon sx={{ fontSize: 50, color: "#1976d2", mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Email
              </Typography>
              <Typography variant="body1" color="text.secondary">
                labrassi.mohamed@gmail.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Phone Card */}
        <Grid item xs={12} sm={6} md={4} className="hover:animate-scale">
          <Card sx={{ height: "100%", boxShadow: 3 }}>
            <CardContent sx={{ textAlign: "center", p: 4 }}>
              <PhoneIcon sx={{ fontSize: 50, color: "#1976d2", mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Phone
              </Typography>
              <Typography variant="body1" color="text.secondary">
                +212652717720
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Address Card */}
        <Grid item xs={12} sm={6} md={4} className="hover:animate-scale">
          <Card
            sx={{
              height: "100%",
              boxShadow: 3,
              "&:hover": { transform: "scale(1.02)", transition: "0.3s" },
            }}
          >
            <CardContent sx={{ textAlign: "center", p: 4 }}>
              <AddressIcon
                sx={{
                  fontSize: 50,
                  color: "#1976d2",
                  mb: 2,
                }}
              />
              <Typography variant="h6" gutterBottom>
                Address
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Marrakech, Morocco
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
