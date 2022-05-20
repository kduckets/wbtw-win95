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

function Merch({ content }) {
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
            <h3>eco wallet compact disc</h3>  
            <p>CD comes in 100% plastic-free eco wallet gatefold</p>
           
            <a href="https://webroketheweather.bandcamp.com/album/we-broke-the-weather?campaign=website" target="_blank" rel="noopener noreferrer">
            <img src='/cd.jpg' alt='wbtw-cd' width='90%' ></img>
            </a>
            <h4>$10</h4>
            <p>
            <a href="https://webroketheweather.bandcamp.com/album/we-broke-the-weather?campaign=website" target="_blank" rel="noopener noreferrer"><button>order on bandcamp</button></a>
            </p>
          <br/>
          <hr class="rounded"></hr> 
      
          <h3>t-shirts</h3>
          <p>wish your friends said “hey, cool tshirt” more often? try this one.</p>  
          <a href="https://webroketheweather.bandcamp.com/merch/rot-king-t-shirt?campaign=website" target="_blank" rel="noopener noreferrer">
            <img src='/t-shirt.jpg' alt='wbtw-tshirt' width='90%' ></img>
            </a>
            <h4>$20</h4>
            <p>
            <a href="https://webroketheweather.bandcamp.com/merch/rot-king-t-shirt?campaign=website" target="_blank" rel="noopener noreferrer"><button>order on bandcamp</button></a>
            </p>
          <br/>
          <br/>
          <hr class="rounded"></hr> 
            <h3>sticker pack</h3>
          <p>grab some stickers for your stickerless surfaces</p>  
          <a href="https://webroketheweather.bandcamp.com/merch/wbtw-vinyl-sticker-pack?campaign=website" target="_blank" rel="noopener noreferrer">
            <img src='/fire sticker.jpg' alt='wbtw-fire-sticker' width='90%' ></img>
            </a>
            <h4>$5</h4>
            <p>
            <a href="https://webroketheweather.bandcamp.com/merch/wbtw-vinyl-sticker-pack?campaign=website" target="_blank" rel="noopener noreferrer"><button>order on bandcamp</button></a>
            </p>
          <br/>
          <br/>
          <hr class="rounded"></hr> 
            <br/>
       
       <br/>
            <small><i>In an effort to play some small role in contributing to much needed solutions, we broke the weather is donating a portion of 2022 
              album and merch proceeds to the  <a href="https://www.climateemergencyfund.org/" 
              target="_blank" rel="noopener noreferrer">Climate Emergency Fund</a>, a fantastic eNGO that funds "young, ultra-ambitious organizations that tell the truth about the climate emergency, disrupt normalcy, organize mass protests, and demand transformative change." Thanks for caring and supporting this important work!</i></small>
            <div>

              <br/>
              </div>  

        </div>
    )
}

export default Merch
