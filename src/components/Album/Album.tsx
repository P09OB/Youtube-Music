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

    let className = 'Album_e--none';
    if(props.icono){
        className = 'Album_e';
    }


    return <div className='Album_contenedor'>
        <a href={props.urlAlbum}><img className='Album_img' src={props.img}></img></a>
        <p className='Album__name'>{props.name}</p>
        <div className='Album_contenedor--text'>
        <img className={className} src="https://www.seekpng.com/png/full/206-2068701_explicit-icon-facebook-icon-ash-color-symbols-gif.png"></img>
        <p className='Album__text'>Album · <a href={props.urlSingle} className='Album__text Album_name'>{props.single}</a></p>
        </div>
        
  </div>;
}