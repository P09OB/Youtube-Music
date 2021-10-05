import React from 'react';
import './App.css';
import { Link } from '../Link/Link';
import Album, {AlbumProps} from '../Album/Album';
import { Artist } from '../Artist/Artist';
import { Playlist } from '../Playlist/Playlist';


type AlbumElemObj = AlbumProps & {

  id:number;
}

const albumElems: AlbumElemObj [] = [




]

function App() {
  return (
    <div>

      <div className="App_nav">

        <a className="App_icon" href="https://music.youtube.com/">
          <img src="https://music.youtube.com/img/on_platform_logo_dark.svg"></img>
        </a>

        <nav className="App_link">
          <Link
            text="Home"
            url="https://www.youtube.com/"
            active />

          <Link
            text="Explore"
            url="https://www.youtube.com/"
            active />

          <Link
            text="Library"
            url="https://www.youtube.com/"
            active />

          <Link
            text="Search"
            url="https://www.youtube.com/"
            active />

        </nav>

        <div className="App_user"></div>

      </div>

      <section className="App_fav">
        <p className="App_title">Your favorites</p>

        <ul className="App_container">

          <Artist
            name={'Lorde'}
            views={'4.8M'}
            url={'https://www.youtube.com/channel/UCOxhwqKKlVq_NaD0LVffGuw'}
            img={'https://www.edmradio.es/wp-content/uploads/2021/06/lorde-spotify.jpg'}
          />
          <Artist
            name={'Ed Sheeran'}
            views={'48.7M'}
            url={'https://www.youtube.com/channel/UC0C-w0YjGpqDXGB8IHb662A'}
            img={'https://img.discogs.com/dAKOSoYh3iWk_diDomSXUTdILEI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-2184482-1624617975-1271.jpeg.jpg'}
          />
          <Artist
            name={'Jawny'}
            views={'170.000'}
            url={'https://www.youtube.com/channel/UCJPdFY44nPBDnbEk8h-LkDw'}
            img={'https://cdns-images.dzcdn.net/images/artist/9db5d4492b59c22127c483795f64ff93/264x264.jpg'}
          />
          <Artist
            name={'Troye Sivan'}
            views={'7.43M'}
            url={'https://www.youtube.com/channel/UCWcrr8Q9INGNp-PTCLTzc8Q'}
            img={'https://los40es00.epimg.net/los40/imagenes/2018/08/31/musica/1535716828_595508_1535723554_noticia_normal.jpg'}
          />

          <Album
            name={'Planet Her'}
            single={'Doja Cat'}
            img={'https://www.lahiguera.net/musicalia/artistas/doja_cat/disco/11322/doja_cat_planet_her-portada.jpg'}
            urlAlbum={'https://www.youtube.com/watch?v=2V_uAAAH-_Q&list=OLAK5uy_kDkBOR6ogIJQFI4F4bhCPMn2DiPNdqeLc&ab_channel=dojacatVEVO'}
            urlSingle={'https://www.youtube.com/channel/UCzpl23pGTHVYqvKsgY0A-_w'}
            icono={true} 
          />


          <Album
            name={'After Hours'}
            single={'The Weeknd'}
            img={'https://images-na.ssl-images-amazon.com/images/I/71ffMedtKNL._SL1200_.jpg'}
            urlAlbum={'https://www.youtube.com/watch?v=JH398xAYpZA&list=OLAK5uy_lwaD8UXRautA8W9eWT4zZOvwf5Ktxpax8&ab_channel=TheWeekndVEVO'}
            urlSingle={'https://www.youtube.com/channel/UC0WP5P-ufpRfjbNrmOWwLBQ'}
            icono={false} 
          />


        </ul>

      </section>

      <section>
        <div className="App_similar">
          <a href="https://www.youtube.com/channel/UCBQZwaNPFfJ1gZ1fLZpAEGw">
            <img className="App_imgArtist" src="https://asuncioni.co/wp-content/uploads/2019/02/top.png"></img>
          </a>
          <div>
            <p className="App_similar--title">SIMILAR TO</p>
            <a href="https://www.youtube.com/channel/UCBQZwaNPFfJ1gZ1fLZpAEGw" className="App_similar--singer"> Twenty One Pilots</a>
          </div>

        </div>

        <ul className="App_container">

          <Playlist
            name={'laid-back pop'}
            songs={'ZAYN, Ed Sheeran, Kygo y Selena Gomez'}
            img={'https://p.favim.com/orig/2018/08/21/aesthetic-tumblr-neon-Favim.com-6158751.jpg'}
            url={'https://www.youtube.com/watch?v=wF70BNMRYaw&list=PL7dSclnUb6852Pt5QsG2LgHrDclrcv3vk&ab_channel=iPerol'}

          />

          <Artist
            name={'The Neighbourhood'}
            views={'3.76M'}
            url={'https://www.youtube.com/channel/UCDAXusYwRJpiSP2CHnXnVnw'}
            img={'https://images-na.ssl-images-amazon.com/images/I/71QZDxLwv3L._SL1422_.jpg'}
          />
          <Artist
            name={'Arctic Monkeys'}
            views={'5.64M'}
            url={'https://www.youtube.com/channel/UC-KTRBl9_6AX10-Y7IKwKdw'}
            img={'https://lastfm.freetls.fastly.net/i/u/770x0/e04af7133fe2dd1bc7e43fadba6ace24.jpg'}
          />
          <Artist
            name={'James Bay'}
            views={'1.86M'}
            url={'https://www.youtube.com/channel/UCenAJLKHnIU9UKDp1FV9tTA'}
            img={'https://indiehoy.com/wp-content/uploads/2018/06/james-bay.jpg'}
          />

          <Album
            name={'Torches'}
            single={'Foster the People'}
            img={'https://lastfm.freetls.fastly.net/i/u/500x500/af29e149b06245e19ecb31a1871cc4c8.jpg'}
            urlAlbum={'https://www.youtube.com/watch?v=ABzh6hTYpb8&list=OLAK5uy_lb3x849NJJDP4TDO6cPcCyx6WQDkf-7EY&ab_channel=fosterthepeopleVEVO'}
            urlSingle={'https://www.youtube.com/channel/UC6R1juCB5ArnJGMmUlEE_fg'}
            icono={true} 
          
          />

          <Playlist
            name={'laid-back pop'}
            songs={'ZAYN, Ed Sheeran, Kygo y Selena Gomez'}
            img={'https://64.media.tumblr.com/5eac2a20abdb91502307349947390df4/tumblr_opac9j79Hb1woem6yo1_500.jpg'}
            url={'https://www.youtube.com/watch?v=wF70BNMRYaw&list=PL7dSclnUb6852Pt5QsG2LgHrDclrcv3vk&ab_channel=iPerol'}

          />


        </ul>

      </section>


    </div>

  );
}

export default App;
