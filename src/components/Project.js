import React from 'react'
import "./Projects.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import pack from "./pack.png";
import food from "./food.png";
import tic from "./tictac.png";
import dog from "./dogbreed.png";
import { blue } from '@mui/material/colors';
function Project() {
  return (
    <div id='proj'>
      <br></br>
      <center><h1 style={{color:"black"}}>Projects</h1>
      <br></br>
      <br></br>
    <div className='project1'>
    <Card sx={{ maxWidth: 345 ,backgroundColor:"white",backdropFilter:"blur(5px)",borderRadius:"5%"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pack}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Packer & Movers Website
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Landing page for a company with database connectivity.
            #react #Firebase #Nodejs
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='project2'>
    <Card sx={{ maxWidth: 345 ,backgroundColor:"white",backdropFilter:"blur(5px)",borderRadius:"5%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={food}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Food Delivery Website
          </Typography>
          <Typography variant="body2" color="text.secondary">
            a Responsive food ordering website.
            #html,#css,#bootstrap
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='project3'>
    <Card sx={{ maxWidth: 345 ,backgroundColor:"white",backdropFilter:"blur(5px)",borderRadius:"5%"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={tic}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tic-Tac-Toe Game
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A simple multiplayer tic-tac-toe game.
            #Html #Css #Javascript
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='project4' style={{color:blue}}>
    <Card sx={{ maxWidth: 345 ,backgroundColor:"white",backdropFilter:"blur(5px)",borderRadius:"5%"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={dog}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dog Breed Identification using image
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Identifies Dog's Breed using ml prediction model
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </center>
    <br></br>
    </div>
  )
}

export default Project