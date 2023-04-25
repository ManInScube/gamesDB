import React from "react"
import { FC } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IGameCard from '../types/types';



const GameCard: FC<IGameCard> = ({name, genres, platforms}) =>{
    return(
      <Card sx={{ width: '20%', minWidth: 275, maxWidth: 375, marginBottom: 5}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h6" component="div">
          {genres}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {platforms}
        </Typography>
      </Card>
    )
}

export default GameCard
