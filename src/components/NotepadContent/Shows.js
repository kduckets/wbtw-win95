import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebook, FaBandcamp, FaEnvelope } from 'react-icons/fa'

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

            <h3>live, in concert!</h3>

            <p><b>3.30.22 // Cambridge, MA</b> <a href='https://www.mideastoffers.com/event/11958255/who-iam-we-broke-the-weather-as-seen-from-space' target='_blank' rel="noopener noreferrer"><small>  (info)</small></a><br/>Middle East Upstairs <br/>
            <small><i>As Seen From Space, Who.iAm</i></small></p>
            <p><b>4.14.22 // Worcester, MA</b> <a href='https://www.facebook.com/events/1021644978564043/' target='_blank' rel="noopener noreferrer"><small>  (info)</small></a><br/>Ralph's Rock Diner <br/>
            <small><i>Bass Sabbath, T & the Wrecks, Allison & Moon</i></small></p>
            <p><s style={{color:'red'}}><b>4.21.22 // Somerville, MA</b> <br/>The Jungle <br/>
           </s></p>
            <p><s style={{color:'red'}}><b>4.27.22 // Providence, RI</b> <br/>Dusk <br/>
           </s></p>
            <p><b>5.14.22 // Somerville, MA</b> <a href='https://somervilleartscouncil.org/node/48180' target='_blank' rel="noopener noreferrer"><small>  (info)</small></a><br/>Porchfest <br/>
           </p>
            <p><b>5.31.22 // Allston, MA</b><a href='https://www.facebook.com/events/1123949811738104/' target='_blank' rel="noopener noreferrer"><small>  (info)</small></a> <br/>O'Brien's Pub<br/>
            <small><i>Bad Larrys, Me in Capris</i></small></p>
            <br/>
            <hr class="rounded"></hr> 
            <br/>
            <a href='https://www.mideastoffers.com/event/11958255/who-iam-we-broke-the-weather-as-seen-from-space' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-mideast' src='/mideast-poster.png' style={{width:'100%'}}/>
            </a>
            <br/>
            <br/>
            <a href='https://www.facebook.com/events/1021644978564043/' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-ralphs' src='/ralphs-poster.jpg' style={{width:'100%'}}/>
            </a>
            <br/>
            <br/>
            <a href='https://www.facebook.com/events/939692190071596/' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-dusk' src='/wbtw-dusk-poster.jpg' style={{width:'100%'}}/>
            </a>
            <br/>
            <br/>
            <a href='https://somervilleartscouncil.org/node/48180' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-porchfest' src='/porchfest-poster.jpg' style={{width:'100%'}}/>
            </a>
            <br/>
            <br/>
            <a href='https://www.facebook.com/events/1123949811738104/' target='_blank' rel="noopener noreferrer">
            <img alt='wbtw-obriens' src='/obriens-poster.png' style={{width:'100%'}}/>
            </a>

            {/* <img alt='wbtw-live' src='/wbtw-midway.jpg' style={{width:'100%'}}/> */}

     
                 
           
        
          
            <div>
                <br/>
       
              <br/>
              <br/>
              </div>  

        </div>
    )
}

export default Shows
