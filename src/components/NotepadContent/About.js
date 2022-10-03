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

function About({ content }) {
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
            <h3>next show:</h3>
            <p><b>10.23.22 - Allston, MA</b> <a href='https://www.eventbrite.com/e/blk-jks-we-broke-the-weather-obriens-tickets-396699969287' target='_blank' rel="noopener noreferrer"> <FaInfoCircle/></a><br/>
            O'Brien's Pub<br/>
            <small>w/ <a href='https://www.feepband.com' target='_blank' rel="noopener noreferrer">Feep</a>, <a href='https://www.instagram.com/bikethrasher_/' target='_blank' rel="noopener noreferrer">Bike Thrasher</a></small></p>
        
            <hr class="rounded"></hr> 

            <h3>wbtw, live! <small>(at kennedy studios)</small></h3>

            <a href="https://webroketheweather.bandcamp.com/album/live-at-kennedy-studios?campaign=website" target="_blank" rel="noopener noreferrer">
            <img src='/wbtw-live.jpg' alt='wbtw-live' width='100%' ></img>
            </a> 
            <iframe title="wbtw-live-streams" width="100%" height="52" src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2Fjjqxqhhznxttq&theme=light" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>
 
            
            <hr class="rounded"></hr> 

           <h3>debut album out now</h3>
         
            <a href="https://webroketheweather.bandcamp.com/album/we-broke-the-weather?campaign=website" target="_blank" rel="noopener noreferrer">
            <img src='/wbtw-cover.jpg' alt='wbtw-cover' width='100%' ></img>
            </a> 
            <iframe title="wbtw-streams" width="100%" height="52" src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2F3bzzbq2pft9qh&theme=light" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>
       
            <hr class="rounded"></hr> 
            

            <small>
           
                 <p>wbtw is:</p> 
                 <i>
                   <p>nick - keys, sax, flute, etc, vocals</p>
                  
                   <p>andy - drums, vocals, count-ins</p>
                 
                   <p>steve - bass, moog, brown notes</p>
                     
                   <p>scott - guitar, sax, vocals, garage banding</p>

                   <p>kev - guitar/loud noises</p></i>

                
                   <p><a className="email" href="mailto:webroketheweather@gmail.com">webroketheweather@gmail.com</a></p>
           
                  </small>
          
  
            <div>
                <br/>
        
            <a href="https://www.climateemergencyfund.org/" 
              target="_blank" rel="noopener noreferrer">
              <button>fix the weather</button>
              </a>
              <br/>
              <br/>
              </div>  

        </div>
    )
}

export default About
