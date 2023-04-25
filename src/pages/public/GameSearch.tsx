import { FC, useState, useEffect } from "react"
import axios from "axios"
import CardList from "../../CardList/CardList"
import IGameCard from "../../types/types"



const GameSearch: FC = () =>{

    const [date, setDate] = useState(1623888000)
    const [list, setList] = useState<IGameCard[]>()



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

  useEffect(function(){
    getGames(date);
  }, [])
    return(
        <CardList list={list}/>
    )
}

export default GameSearch