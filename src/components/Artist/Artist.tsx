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
            <a className='Artist__text--name' href={props.url}>{props.name}</a>
            <p className='Artist__text--sub'>{props.views} subscribers</p>
        </div>
        
    </div>
}

