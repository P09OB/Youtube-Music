import React from "react";
import './Playlist.css';

interface PlaylistProps{

    name:string;
    songs:string;
    img:string;
    url:string;
}

export const Playlist: React.FC<PlaylistProps> = (props)=>{

    return <a className='Playlist__container' href={props.url}>
        <img src={props.img} className='Playlist__img'></img>
        <p>{props.name}</p>
        <p>{props.songs}</p>

    </a>


}