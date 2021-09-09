import React from "react";
import './Playlist.css';

interface PlaylistProps {

    name: string;
    songs: string;
    img: string;
    url: string;
}

export const Playlist: React.FC<PlaylistProps> = (props) => {

    return <div className='Playlist__container'>
        <a className='Playlist__link' href={props.url}>         
            <img src={props.img} className='Playlist__img'></img>
            <p className='Playlist__text'>{props.name}</p>
        </a>
            <p className='Playlist__text--songs'>{props.songs}</p>
    </div>


}