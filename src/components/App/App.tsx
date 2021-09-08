import React from 'react';
import './App.css';
import { Link } from '../Link/Link';
import { Album } from '../Album/Album';
import { Artist } from '../Artist/Artist';
import { Playlist } from '../Playlist/Playlist';

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
            views={'1.86M'}
            url={'https://music.youtube.com/channel/UCiDBtu8whAdUgiJ5o1g7sQQ'}
            img={'https://www.edmradio.es/wp-content/uploads/2021/06/lorde-spotify.jpg'}
          />
          <Artist
            name={'Ed Sheeran'}
            views={'1.86M'}
            url={'https://music.youtube.com/channel/UCiDBtu8whAdUgiJ5o1g7sQQ'}
            img={'https://img.discogs.com/dAKOSoYh3iWk_diDomSXUTdILEI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-2184482-1624617975-1271.jpeg.jpg'}
          />
          <Artist
            name={'Jawny'}
            views={'1.86M'}
            url={'https://music.youtube.com/channel/UCiDBtu8whAdUgiJ5o1g7sQQ'}
            img={'https://cdns-images.dzcdn.net/images/artist/9db5d4492b59c22127c483795f64ff93/264x264.jpg'}
          />
          <Artist
            name={'Troye Sivan'}
            views={'1.86M'}
            url={'https://music.youtube.com/channel/UCiDBtu8whAdUgiJ5o1g7sQQ'}
            img={'https://los40es00.epimg.net/los40/imagenes/2018/08/31/musica/1535716828_595508_1535723554_noticia_normal.jpg'}
          />

          <Album
            name={'Planet Her'}
            single={'Doja Cat'}
            img={'https://www.lahiguera.net/musicalia/artistas/doja_cat/disco/11322/doja_cat_planet_her-portada.jpg'}
            urlAlbum={''} 
            urlSingle={''}/>


          <Album
            name={'After Hours'}
            single={'The Weeknd'}
            img={'https://images-na.ssl-images-amazon.com/images/I/71ffMedtKNL._SL1200_.jpg'} 
            urlAlbum={''} 
            urlSingle={''} />


        </ul>

      </section>

      <section>
        <div className="App_similar">
          <a href="https://www.youtube.com/channel/UCBQZwaNPFfJ1gZ1fLZpAEGw">
          <img className="App_imgArtist"src="https://asuncioni.co/wp-content/uploads/2019/02/top.png"></img>
          </a>
          <div>
            <p >SIMILAR TO</p>
            <p>Artic Monkey</p>
          </div>

        </div>

        <ul className="App_container">

          <Playlist
            name={'laid-back pop'}
            songs={'ZAYN, Ed Sheeran, Kygo y Selena Gomez'}
            img={'https://p.favim.com/orig/2018/08/21/aesthetic-tumblr-neon-Favim.com-6158751.jpg'}
            url={''}

          />

          <Artist
            name={'The Neighbourhood'}
            views={'1.86M'}
            url={'https://music.youtube.com/channel/UCiDBtu8whAdUgiJ5o1g7sQQ'}
            img={'https://images-na.ssl-images-amazon.com/images/I/71QZDxLwv3L._SL1422_.jpg'}
          />
          <Artist
            name={'Arctic Monkeys'}
            views={'1.86M'}
            url={'https://music.youtube.com/channel/UCiDBtu8whAdUgiJ5o1g7sQQ'}
            img={'https://lastfm.freetls.fastly.net/i/u/770x0/e04af7133fe2dd1bc7e43fadba6ace24.jpg'}
          />
          <Artist
            name={'James Bay'}
            views={'1.86M'}
            url={'https://music.youtube.com/channel/UCiDBtu8whAdUgiJ5o1g7sQQ'}
            img={'https://indiehoy.com/wp-content/uploads/2018/06/james-bay.jpg'}
          />

          <Album
            name={'Blurryface'}
            single={'Twenty One Pilots'}
            img={'https://images-na.ssl-images-amazon.com/images/I/71k-5WHYB9L._SL1425_.jpg'} 
            urlAlbum={''} 
            urlSingle={''}/>



          <Playlist
            name={'laid-back pop'}
            songs={'ZAYN, Ed Sheeran, Kygo y Selena Gomez'}
            img={'https://64.media.tumblr.com/5eac2a20abdb91502307349947390df4/tumblr_opac9j79Hb1woem6yo1_500.jpg'}
            url={''}

          />


        </ul>

      </section>


    </div>

  );
}

export default App;
