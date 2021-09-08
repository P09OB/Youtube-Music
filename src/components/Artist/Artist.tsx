import React from "react";
import './Artist.css';


interface ArtistProps{

    name:string;
    views:string;
    url:string;
    img:string;
}

export const Artist: React.FC<ArtistProps> =(props)=>{
    return <div className='Artist__container'>
        <a href={props.url}><img className='Artist__img' src={props.img}></img></a>
        <div className='Artist__text'>
            <a href={props.url}>{props.name}</a>
            <p className='Artist_sus'>{props.views} subscribers</p>
        </div>
        
    </div>
}

