import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebook, FaBandcamp, FaEnvelope, FaInfoCircle } from 'react-icons/fa'

const Icons = { FaInstagram, FaFacebook, FaBandcamp, FaEnvelope };

const StyledItem = styled.li`
    display: inline;
    font-size: 20px;
    &:not(:first-child) {
      margin-left: 8px;
      }
`
const StyledList = styled.ul`
      margin: auto;
      padding:0px;
`
const StyledLink = styled.a`
    color: black;
`
const StyledDiv = styled.div`
    text-align: center;
    margin: auto;
    width: 100%;
    `

function Shows({ content }) {
    const social = [

        {
          name: 'FaBandcamp',
          link: 'https://webroketheweather.bandcamp.com?campaign=website',
        },
        {
          name: 'FaInstagram',
          link: 'https://www.instagram.com/webroketheweather/',
        },
        {
          name: 'FaFacebook',
          link: 'https://facebook.com/webroketheweather',
        },
        {
          name: 'FaEnvelope',
          link: 'mailto:webroketheweather@gmail.com',
        },

      ]

    return (
        <div>
          <StyledDiv>
             <h2>we broke the weather</h2>
             
             <StyledList>
            {
                    social.map((s, idx) => {
                        const Icon = Icons[s.name];
                        return (
                            <StyledItem key={idx}>
                                <StyledLink href={s.link} target="_blank" rel="noopener noreferrer">
                                    <Icon />
                                </StyledLink>
                            </StyledItem>
                        );
                    })
                }
                </StyledList>
                </StyledDiv>
                <hr class="rounded"></hr> 

            <h3>upcoming shows</h3>

            <p><b>11.3.24 - Lowell, MA</b><br/>Taffeta Music Hall<br/></p>
           <p>w/ <small><a href='https://www.davidcrossband.com/' target='_blank' rel='noopener noreferrer'>David Cross Band</a></small></p>
           <a href='https://www.tixr.com/groups/taffetamusic/events/david-cross-band-plays-king-crimson-114588' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-taffeta-24' src='/DavidCrossBand_Lowell_Portrait.jpg' style={{width:'100%'}}/>
            </a>
    
            
           {/* <i><small>more shows coming soon!</small></i> */}
                
           <hr class="rounded"></hr> 

            <h3>past shows</h3>

            <p><b>9.7.24 - Boston, MA</b><br/>Midway Cafe<br/>
           </p>
           <p>w/ <small><a href='https://eightfootmanchild.bandcamp.com/' target='_blank' rel="noopener noreferrer">Eight Foot Manchild</a>, <a href='https://komodorojo.bandcamp.com/' target='_blank' rel="noopener noreferrer">Komodo Rojo</a>, & <a href='https://pangsrock.bandcamp.com/' target='_blank' rel="noopener noreferrer">Pangs</a> 
           </small></p>
           <a href='https://www.facebook.com/events/1036807998025772/' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-midway-24' src='/wbtw midway 2024.png' style={{width:'100%'}}/>
            </a>

            <p> <b>6.15.24 - Allston, MA </b><br/>Tourist Trap<br/>  
            <small>w/ <a href='https://clamb.bandcamp.com/' target='_blank' rel="noopener noreferrer">Clamb</a> </small></p>
            <a href='https://www.instagram.com/webroketheweather/reel/C7Wy18FPdy1/?hl=en' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-clamb-24' src='/wbtw-clamb 2024.png' style={{width:'100%'}}/>
            </a>

            <p><b>5.11.24 - Somerville, MA</b><br/>Porchfest<br/>
           </p>
           <a href='https://beta.somervilleartscouncil.org/view/porchfest-single-entry/entry/316/' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-porchfest-24' src='/wbtw porchfest 2024 ver3 invert.jpg' style={{width:'100%'}}/>
            </a>

            <p> <b>3.16.24 - Medford, MA </b><br/>The Bang! Space<br/>  
            <small><a href='https://ohmfoam.bandcamp.com/album/ohm-foam' target='_blank' rel="noopener noreferrer">Ohm Foam</a> & <a href='https://pseudospace.bandcamp.com/' target='_blank' rel="noopener noreferrer">Pseudospace</a></small></p>
            <a href='https://www.instagram.com/webroketheweather/p/C12CHwdOXhq/' target='_blank' rel="noopener noreferrer"><img alt='wbtw-bang-space' src='/bangspace24.jpg' style={{width:'100%'}}/></a>
           
            
           <p> <b>7.4.23 - Cambridge, MA </b><br/> The Middle East<br/>  
            <small><a href='https://www.facebook.com/weareheadfirst/' target='_blank' rel="noopener noreferrer">Headfirst</a>, <a href='https://www.facebook.com/Kruisershow/' target='_blank' rel="noopener noreferrer">Kruiser</a>, <a href='https://wearemaplehead.com/' target='_blank' rel="noopener noreferrer">Maplehead</a></small></p>
          

            <p> <b>5.6.23 - Somerville, MA </b><br/>The Jungle<br/>  
            <small><a href='https://freerockband.com/' target='_blank' rel="noopener noreferrer">Free Rock</a>, <a href='https://www.facebook.com/thecosmicvultures' target='_blank' rel="noopener noreferrer">The Cosmic Vultures</a>, <a href=' https://www.facebook.com/reneemaskinmusic/' target='_blank' rel="noopener noreferrer">Renee Maskin</a></small></p>
           
            <img alt='wbtw-jungle-may' src='/jungle-may.jpeg' style={{width:'100%'}}/>

            <p><b>4.8.23 - Lowell, MA </b><br/>
            The Overlook<br/>  
            <small><a href='https://www.sonslunaris.com/' target='_blank' rel="noopener noreferrer">Sons Lunaris</a>, <a href='https://www.facebook.com/RumboatChili/' target='_blank' rel="noopener noreferrer">Rumboat Chili</a></small></p>
            
            <a href='https://millno5.com/event/sons-lunaris-rumboat-chili-we-broke-the-weather/' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-overlook' src='/overlook.png' style={{width:'100%'}}/>
            </a>

            <p><b>3.25.23 - Medford, MA </b> <br/>
            Gordita Beach<br/>  
            <small><a href='http://www.courtneyswain.com/' target='_blank' rel="noopener noreferrer">Courtney Swain</a>, <a href='https://eightfootmanchild.bandcamp.com/' target='_blank' rel="noopener noreferrer">Eight Foot Manchild</a></small></p>
            
            <img alt='wbtw-gordita' src='/gordita.png' style={{width:'100%'}}/>

            <p><b>2.26.23 - Somerville, MA </b><a href='https://www.facebook.com/events/1246278469574993' target='_blank' rel="noopener noreferrer"> <FaInfoCircle/></a><br/>
            The Jungle<br/>  
            <small><a href='https://ttzopp.bandcamp.com/album/garage-demos' target='_blank' rel="noopener noreferrer">TT Zopp</a>, <a href='https://m.facebook.com/gwfireband/' target='_blank' rel="noopener noreferrer">Greenwood Fire</a></small></p>
            <a href='https://www.facebook.com/events/1246278469574993' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-jungle' src='/jungle.jpeg' style={{width:'100%'}}/>
            </a>


            <p><b>10.23.22 - Allston, MA</b> <a href='https://www.eventbrite.com/e/we-broke-the-weather-feep-bikethrasher-obriens-tickets-396699969287' target='_blank' rel="noopener noreferrer"> <FaInfoCircle/></a><br/>
            O'Brien's Pub<br/>
            <small><a href='https://www.feepband.com' target='_blank' rel="noopener noreferrer">FEEP</a>, <a href='https://www.instagram.com/bikethrasher_/' target='_blank' rel="noopener noreferrer">Bikethrasher</a>,
            <a href='https://detroitrebellion.com/' target='_blank' rel="noopener noreferrer"> Detroit Rebellion</a></small></p>
            <a href='https://www.eventbrite.com/e/we-broke-the-weather-feep-bikethrasher-obriens-tickets-396699969287' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-obriens-hween' src='/obriens 10-23-22.png' style={{width:'100%'}}/>
            </a>

            <p><b>8.31.22 - Boston, MA </b><br/>
            Midway Cafe<br/>  
            <small><a href='https://www.feepband.com' target='_blank' rel="noopener noreferrer">FEEP</a>, <a href='https://squashband.bandcamp.com' target='_blank' rel="noopener noreferrer">Squash</a>, <a href='https://www.facebook.com/100009500773621/videos/542493770597784/' target='_blank' rel="noopener noreferrer">Artist Jackie’s Face Eraser</a></small></p>

            <p> <b>6.21.22 - Somerville, MA</b> <br/>Out of the Blue Too at the Somerville Armory <br/>
            <small> <a href='https://music.varonaband.com/' target='_blank' rel="noopener noreferrer">Varona</a>, <a href='https://therupertselection.bandcamp.com/' target='_blank' rel="noopener noreferrer">The Rupert Selection</a>  </small></p>
            <a href='https://www.facebook.com/events/1692579974410214/' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-parma chai' src='/armory-poster.jpg' style={{width:'100%'}}/>
            </a>

            <p><b>5.31.22 - Allston, MA</b><br/>O'Brien's Pub<br/>
            <small> <a href='https://badlarrys.bandcamp.com/' target='_blank' rel="noopener noreferrer">Bad Larrys</a>, <a href='https://meincapris.bandcamp.com/' target='_blank' rel="noopener noreferrer">Me in Capris</a>  </small></p>
            <a href='https://www.facebook.com/events/1123949811738104/' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-obriens' src='/obriens-poster.png' style={{width:'100%'}}/>
            </a>

            <p><b>5.14.22 - Somerville, MA</b><br/>Porchfest <br/>
           </p>
           <a href='https://somervilleartscouncil.org/node/48180' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-porchfest' src='/porchfest-poster.jpg' style={{width:'100%'}}/>
            </a>

            <p><s style={{color:'red'}}><b>4.27.22 - Providence, RI</b> <br/>Dusk <br/>
           </s></p>
           <a href='https://www.facebook.com/events/939692190071596/' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-dusk' src='/wbtw-dusk-poster.jpg' style={{width:'100%'}}/>
            </a>
               
            <p><s style={{color:'red'}}><b>4.21.22 - Somerville, MA</b> <br/>The Jungle <br/>
           </s></p>
           
            <p><b>4.14.22 - Worcester, MA</b><br/>Ralph's Rock Diner <br/>
            <small> <a href='https://basssabbath.bandcamp.com/' target='_blank' rel="noopener noreferrer">Bass Sabbath</a>, <a href='https://tandthewrecks.bandcamp.com/' target='_blank' rel="noopener noreferrer">T & the Wrecks</a>, <a href='https://allisonandmoon.bandcamp.com/' target='_blank' rel="noopener noreferrer">Allison & Moon</a>  </small></p>
            <a href='https://www.facebook.com/events/1021644978564043/' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-ralphs' src='/ralphs-poster.jpg' style={{width:'100%'}}/>
            </a>

            <p><b>3.30.22 - Cambridge, MA</b> <br/>Middle East Upstairs <br/>
            <small> <a href='https://asfs.bandcamp.com/' target='_blank' rel="noopener noreferrer">As Seen From Space</a>, <a href='https://www.facebook.com/Who.iAm143/' target='_blank' rel="noopener noreferrer">Who.iAm</a>  </small></p>
            <a href='https://www.mideastoffers.com/event/11958255/who-iam-we-broke-the-weather-as-seen-from-space' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-mideast' src='/mideast-poster.png' style={{width:'100%'}}/>
            </a>

            <p><b>1.21.20 - Boston, MA</b> <br/>Midway Cafe <br/>
            <small> <a href='https://minxroxxx.bandcamp.com/' target='_blank' rel="noopener noreferrer">Minx</a>, <a href='https://gasolinevirgins.bandcamp.com/' target='_blank' rel="noopener noreferrer">Gasoline Virgins</a>  </small></p>
            <br/>

            <div>
                <br/>
       
              <br/>
              <br/>
              </div>  

        </div>
    )
}

export default Shows
