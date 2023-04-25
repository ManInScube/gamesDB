import { FC } from "react"
import {Link} from "react-router-dom"
import React from "react"


const Nav: FC = () =>{
    return(
        <>
            <Link to={"/"}>Home</Link>
            <Link to={"/gamesearch"}>Game Search</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
        </>
    )
}

export default Nav