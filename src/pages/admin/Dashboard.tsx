import { FC, useState, useEffect } from "react"
import axios from "axios"
import IGameCard from "../../types/types"
import { DataGrid } from '@mui/x-data-grid'
import { Box } from "@mui/material"

const Dashboard: FC = () =>{
    const [list, setList] = useState([])
    const [date, setDate] = useState(1623888000)

    async function getGames(date:number){
        axios({
          url: "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games",
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Client-ID': '3ik8nc79axzz1eyr45fz6yu0mxtury',
              'Authorization': 'Bearer ynv224nmiod8styjeg94ku70yrk0d7'
          },
          data: `fields name, first_release_date, platforms, genres, id; limit 80; where first_release_date<${date};`
        })
          .then(response => {
              console.log(response.data);
              setList(response.data);
          })
          .catch(err => {
              console.error(err);
          });
      }

      async function getPlatforms(id: number){
        axios({
            url: "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/platforms",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': '3ik8nc79axzz1eyr45fz6yu0mxtury',
                'Authorization': 'Bearer ynv224nmiod8styjeg94ku70yrk0d7'
            },
            data: /*"fields abbreviation, alternative_name,category, generation, name, platform_logo; limit 100;"*/ `fields name; where id ${id}`
          })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.error(err);
            });
      }
    
      useEffect(function(){
        getGames(date);
        //getPlatforms();
      }, [])

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 300
        },
        {
            field: 'genres',
            headerName: 'Genres',
            width: 300
        },
        {
            field: 'platforms',
            headerName: 'Platforms',
            width: 300
        }
    ]
    return(
        <Box sx={{width: '100%'}}>
            <DataGrid rows={list} columns={columns} />

            
        </Box>
        
    )
}

export default Dashboard