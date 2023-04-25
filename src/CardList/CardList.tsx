import React from "react"
import { FC } from "react";
import GameCard from "../GameCard/GameCard";
import IGameCard from '../types/types';
import Box, { BoxProps } from '@mui/material/Box';



interface ICardList{
    list?: IGameCard[];
}

const CardList: FC<ICardList> = ({list}) =>{
    return(
        <div style={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                }}            
            >
                {list!=null && list.map((item, index)=>
                    <GameCard key={index} name={item.name} genres={item.genres} platforms={item.platforms}/>
                )}
            </Box>
        </div>
    )
}

export default CardList