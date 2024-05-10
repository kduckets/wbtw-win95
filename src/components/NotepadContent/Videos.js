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

function Videos({ content }) {
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
    
            <h3>video archives</h3>
            <p><small><i>"Heavens Were a Bell"</i></small></p>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ruA-MgHg_LQ?si=2qdy25eeOFY7mxcC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>           
            <p><small><i>"Through the Wall" (Live at Kennedy Studios)</i></small></p>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ooi2MEg4ZRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p><small><i>"Bellwether" (Live at Kennedy Studios)</i></small></p>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/c0lfgAyV55A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p><small><i>"In Web" (Live at Kennedy Studios)</i></small></p>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Rk4mE3ULWYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p><small><i>"Fire Season" (Live at Kennedy Studios)</i></small></p>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/beA8Z1Ue9fk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          
        </div>
    )
}

export default Videos
