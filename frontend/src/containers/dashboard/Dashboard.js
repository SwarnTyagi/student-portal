import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Card from "../../components/Card/Card";
import College from "../../assets/collegevent.jpg";
import culture from "../../assets/cultural.jfif";
import orient from "../../assets/orient.jpg";
import fest from "../../assets/fest.jpg";
import { users } from "../../temp";

export default function Dashboard() {
  console.log("Users data", users);
  return (
    <div>
      <Grid container spacing={4}>
        {users.map((user) => {
          return (
            <Grid item xs={12} md={3} sm={6}>
              <Card
                sx={{ minWidth: 275, maxHeight: 100 }}
                image={user.img}
                header={`${user.first_name} ${user.last_name}`}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
