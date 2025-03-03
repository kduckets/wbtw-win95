import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebook, FaBandcamp, FaEnvelope } from 'react-icons/fa'
import Mailchimp from 'react-mailchimp-form'

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
          <br/>
            <Mailchimp
            action="https://webroketheweather.us21.list-manage.com/subscribe/post?u=65c5bfbaf87d036d0dd3dcacc&id=c76f5699f5&f_id=0015a6e1f0"
            fields={[
              {
                name: "EMAIL",
                placeholder: "newsletter signup",
                type: "email",
                required: true,
              },
              
              ]}
              messages={{
                sending: "sending...",
                success: "thanks for subscribing!",
                error: "something went wrong",
                empty: "please enter your email to subscribe",
                duplicate: "this email is already subscribed",
                button: "subscribe",
              }}
            />
            <small>drop your email to get the weather report</small>
            </StyledDiv>
            
            
          {/* <hr class="rounded"></hr> 
            <h3>next show:</h3>
            
            <p><b>2.8.25 - Lowell, MA</b><br/>Taffeta Music Hall<br/></p>
           <p>w/ <small><a href='https://clamb.bandcamp.com/' target='_blank' rel='noopener noreferrer'>Clamb</a> & <a href='https://therupertselection.bandcamp.com/' target='_blank' rel='noopener noreferrer'>The Rupert Selection</a></small></p>
           <a href='https://www.tixr.com/groups/taffetamusic/events/the-rubert-selection-clamb-we-broke-the-weather-125427' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-taffeta-25' src='/wbtw-clamb-rupert.png' style={{width:'100%'}}/>
            </a> */}

            <hr class="rounded"></hr> 
            <h3>Restart Game OUT NOW!</h3>
         
            <a href="https://webroketheweather.bandcamp.com/album/restart-game?campaign=website" target="_blank" rel="noopener noreferrer">
            <img src='/restart-game.jpg' alt='restart-game-cover' width='100%' ></img>
            </a> 
            <iframe width="100%" height="52" src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2Fkffgs2crmqdq3&theme=light" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>            
        
     
           

            <hr class="rounded"></hr> 
            <h3>cabin fever EP (a bandcamp exclusive)</h3>
         
         <a href="https://webroketheweather.bandcamp.com/album/cabin-fever-ep?campaign=website" target="_blank" rel="noopener noreferrer">
         <img src='/cabin_fever_cover.png' alt='cabin-fever-cover' width='100%' ></img>
         </a> 


            <hr class="rounded"></hr> 
            <h3>wbtw's debut album</h3>
         
            <a href="https://webroketheweather.bandcamp.com/album/we-broke-the-weather?campaign=website" target="_blank" rel="noopener noreferrer">
            <img src='/wbtw-cover.jpg' alt='wbtw-cover' width='100%' ></img>
            </a> 
            <iframe title="wbtw-streams" width="100%" height="52" src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2F3bzzbq2pft9qh&theme=light" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>
       


       
            <hr class="rounded"></hr> 

            <h3>wbtw, live! <small>(at kennedy studios)</small></h3>

            <a href="https://webroketheweather.bandcamp.com/album/live-at-kennedy-studios?campaign=website" target="_blank" rel="noopener noreferrer">
            <img src='/wbtw-live.jpg' alt='wbtw-live' width='100%' ></img>
            </a> 
            <iframe title="wbtw-live-streams" width="100%" height="52" src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2Fjjqxqhhznxttq&theme=light" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>


            <hr class="rounded"></hr> 
            

            <small>
           
                 <p>wbtw is:</p> 
                 <i>
                   <p>nick - keys, sax, flute, etc, vocals</p>
                  
                   <p>andy - drums, vocals, count-ins</p>
                 
                   <p>steve - bass, moog, synth wizardry, brown notes</p>
                     
                   <p>scott - guitar, sax, vocals, garage banding</p>

                   <p>kev - guitar/other loud noises</p></i>

                
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
