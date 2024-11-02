import React from 'react';
import '../src/css/style.css';
import logo from './asset/spotify.png'
import iconHome from './asset/maison.png'
import iconLoupe from './asset/loupe.png'
import iconBibli from './asset/bibli.png'
import iconAjout from './asset/ajouter.png'
import iconLike from './asset/like.png'
import iconGlobe from './asset/globe.png'
import btnPlay from './asset/jouer.png'
import fb from './asset/facebook.png'
import insta from './asset/instagram.png'
import twitter from './asset/twitter.png'
import jackson from './asset/jackson.jpeg'
// import artiste1 from 'http://magnatune.com/artists/img/a_rival.jpg'




class MonComposant extends React.Component {
  render() {
    return (
    <body>

{/* =============== nav =============== */}
    <nav>
        <div class="sousNave">
            <div class="box1">

                <div class="logo">
                    <img class="imgLogo" src={logo} alt="description de l'image" />
                    <h1 class="titre">Spotify</h1>
                </div>

                <div class="blok1">
                    <a class="blokBtn" href="#">
                        <img class="icon" src={iconHome} alt="description de l'image" />
                        <h3 class="fonction">Accueil</h3>
                    </a>
                    <a class="blokBtn" href="#">
                        <img class="icon" src={iconLoupe} alt="description de l'image" />
                        <h3 class="fonction">Recherche</h3>
                    </a>
                    <a class="blokBtn" href="#">
                        <img class="icon" src={iconBibli} alt="description de l'image" />
                        <h3 class="fonction">Biblitheque</h3>
                    </a>
                    <a class="blokBtn separe" href="#">
                        <img class="icon" src={iconAjout} alt="description de l'image" />
                        <h3 class="fonction">Crée une playlist</h3>
                    </a>
                    <a class="blokBtn" href="#">
                        <img class="icon" src={iconLike} alt="description de l'image" />
                        <h3 class="fonction">Titres likés</h3>
                    </a>
                </div>

            </div>
            <div class="box2">
                <h5 class="mention">Légal Centre de confidentialité</h5>
                <h5 class="mention">Protection des données</h5>
                <h5 class="mention">Paramètres des cookies</h5>
                <h5 class="mention">À propos des pubs</h5>
                <h5 class="mention">Cookies</h5>

                <a class="langue" href="#">
                    <img class="globe" src={iconGlobe} alt="description de l'image" />
                    <h3 class="fonction">Francais</h3>
                </a>
            </div>
        </div>
    </nav>




{/* =============== main =============== */}


    <main>
        <header>
            <div></div>
            <div class="blokBouton">
                <a class="bouton1" href="#">S'inscrire</a>
                <a class="bouton2" href="#">Se connecter</a>
            </div>
        </header>
        <div class="contenue">
        <a class="playslist">Focus</a>
            <div class="blok">

                <div class="blokMusic">
                  <div class="blok2Music">
                  <img class="imgMusic" src="http://magnatune.com/artists/img/a_rival.jpg" alt="description de l'image" />
                  {/* <img class="btnPlay" src={btnPlay} alt="description de l'image" /> */}
                    <audio controls>
                      <source class="btnPlay" src="http://he3.magnatune.com/all/01-Go%20For%20Broke-A_Rival.mp3" type="audio/mp3" />
                    </audio>
                    <div class="descMusic">
                      <h3 class="titleMusic">A_Rival</h3>
                      <p></p>
                    </div>
                  </div>
                </div>
                    
                <div class="blokMusic">
                  <div class="blok2Music">
                    <img class="imgMusic" src="http://magnatune.com/artists/img/abbas_premjee.jpg" alt="description de l'image" />
                    {/* <img class="btnPlay" src={btnPlay} alt="description de l'image" /> */}
                    <audio controls>
                      <source class="btnPlay" src="http://he3.magnatune.com/all/02-A_Rival-A_Rival.mp3" type="audio/mp3" />
                    </audio>
                    <div class="descMusic">
                      <h3 class="titleMusic">Abbas Premjee</h3>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="blokMusic">
                  <div class="blok2Music">
                    <img class="imgMusic" src="http://magnatune.com/artists/img/fielding2.jpg" alt="description de l'image" />
                    {/* <img class="btnPlay" src={btnPlay} alt="description de l'image" /> */}
                    <audio controls>
                      <source class="btnPlay" src="http://he3.magnatune.com/all/03-Cybernetic%20Mariachi-A_Rival.mp3" type="audio/mp3" />
                    </audio>
                    <div class="descMusic">
                      <h3 class="titleMusic">Adam Fielding</h3>
                      <p></p>
                    </div>
                  </div>
                </div>

                <div class="blokMusic">
                  <div class="blok2Music">
                    <img class="imgMusic" src="http://magnatune.com/artists/img/adriano_fontana.jpg" alt="description de l'image" />
                    {/* <img class="btnPlay" src={btnPlay} alt="description de l'image" /> */}
                    <audio controls>
                      <source class="btnPlay" src="http://he3.magnatune.com/all/04-Burn%20Breather-A_Rival.mp3" type="audio/mp3" />
                    </audio>
                    <div class="descMusic">
                      <h3 class="titleMusic">Adriano Fontana</h3>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="blokMusic">
                  <div class="blok2Music">
                    <img class="imgMusic" src="http://magnatune.com/artists/img/alan_marchand1.jpg" alt="description de l'image" />
                    {/* <img class="btnPlay" src={btnPlay} alt="description de l'image" /> */}
                    <audio controls>
                      <source class="btnPlay" src="ttp://he3.magnatune.com/all/05-Before-A_Rival.mp3" type="audio/mp3" />
                    </audio>
                    <div class="descMusic">
                      <h3 class="titleMusic">Alan Marchand</h3>
                      <p></p>
                    </div>
                  </div>
                </div>
            </div>

                    <a class="playslist">Playlist Spotify</a>
            <div class="blok">
                <div class="blok">
                    <div class="blokMusic">
                  <div class="blok2Music">
                    <img class="imgMusic" src="http://magnatune.com/artists/img/alan_rinehart.jpg" alt="description de l'image" />
                    {/* <img class="btnPlay" src={btnPlay} alt="description de l'image" /> */}
                    <audio controls>
                      <source class="btnPlay" src="http://he3.magnatune.com/all/06-Show%20Me%20Girl-A_Rival.mp3" type="audio/mp3" />
                    </audio>
                    <div class="descMusic">
                      <h3 class="titleMusic">Alan Rinehart</h3>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="blokMusic">
                  <div class="blok2Music">
                    <img class="imgMusic" src="http://magnatune.com/artists/img/alexander_lisenkov.jpg" alt="description de l'image" />
                    {/* <img class="btnPlay" src={btnPlay} alt="description de l'image" /> */}
                    <audio controls>
                      <source class="btnPlay" src="http://he3.magnatune.com/all/07-After-A_Rival.mp3" type="audio/mp3" />
                    </audio>

                    <div class="descMusic">
                      <h3 class="titleMusic">Alexander Lisenkov</h3>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="blokMusic">
                  <div class="blok2Music">
                    <img class="imgMusic" src="http://magnatune.com/artists/img/align_in_time.jpg" alt="description de l'image" />
                    {/* <img class="btnPlay" src={btnPlay} alt="description de l'image" /> */}
                    <audio controls>
                      <source class="btnPlay" src="http://he3.magnatune.com/all/08-Push%20It%20Down-A_Rival.mp3" type="audio/mp3" />
                    </audio>

                    <div class="descMusic">
                      <h3 class="titleMusic">Align in Time</h3>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="blokMusic">
                  <div class="blok2Music">
                    <img class="imgMusic" src="http://magnatune.com/artists/img/crum_marks.jpg" alt="description de l'image" />
                    {/* <img class="btnPlay" src={btnPlay} alt="description de l'image" /> */}
                    <audio controls>
                      <source class="btnPlay" src="http://he3.magnatune.com/all/09-Circuitry-A_Rival.mp3" type="audio/mp3" />
                    </audio>

                    <div class="descMusic">
                      <h3 class="titleMusic">Alison Crum</h3>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="blokMusic">
                  <div class="blok2Music">
                    <img class="imgMusic" src="http://magnatune.com/artists/img/allmeadow_costlow.jpg" alt="description de l'image" />
                    {/* <img class="btnPlay" src={btnPlay} alt="description de l'image" /> */}
                    <audio controls>
                      <source class="btnPlay" src="http://he3.magnatune.com/all/10-Higher-A_Rival.mp3" type="audio/mp3" />
                    </audio>

                    <div class="descMusic">
                      <h3 class="titleMusic">allMeadow</h3>
                      <p></p>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div class="blok blok3">
              <div class="boxTxt">
                <div class="blokTxt">
                  <h3>Société</h3>
                  <p>Lorem rferfenf ferf</p>
                  <p>frefe efef</p>
                  <p>eferf frefref  erfe</p>
                </div>
                <div class="blokTxt">
                <h3>Communautés</h3>
                  <p>kjef efef erfrf</p>
                  <p>feffe fef</p>
                  <p>jujjuy yuuykuyky ykyku</p>
                  <p>ujj ujujiiti</p>
                  <p>mzdeldje fùflmekzek</p>
                </div>
                <div class="blokTxt">
                  <h3>Liens utiles</h3>
                  <p>kfjrlfrzefz</p>
                  <p>lfjr lkzkmmz</p>
                </div>
              </div>
              <div class="boxReseau">
                <img class="imgReseau" src={insta} alt="description de l'image" />
                <img class="imgReseau" src={twitter} alt="description de l'image" />
                <img class="imgReseau" src={fb} alt="description de l'image" />
              </div>
              
            </div>
            <div class="blok blok4">
                © 2023 Spotify AB
            </div>
        </div>
    </main>

<script src="https://kit.fontawesome.com/c1851b7f39.js" crossorigin="anonymous"></script>
</body>
    );


    
  }
}

export default MonComposant;

