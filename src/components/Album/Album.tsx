import React from "react";
import './Album.css'

interface AlbumProps{

    name:string;
    single:string;
    urlAlbum: string;
    urlSingle: string;
    icono?:boolean;
    img:string;

}

export const Album: React.FC<AlbumProps> =(props)=>{
    return <div className='Album_contenedor'>
        <a href={props.urlAlbum}><img className='Album_img' src={props.img}></img></a>
        <h3>{props.name}</h3>

        <div>
        <p className='Album__text'>Album · <a href={props.urlSingle} className='Album__text Album_name'>{props.single}</a></p>
        </div>
        
  </div>;
}