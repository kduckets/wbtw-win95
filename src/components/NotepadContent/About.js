import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebook, FaSoundcloud } from 'react-icons/fa'

const Icons = { FaInstagram, FaFacebook, FaSoundcloud };

const StyledItem = styled.li`
    display: inline;
    font-size: 20px;
    margin-left: 10px;
`

const StyledLink = styled.a`
    color: black;
`

function About({ content }) {
    const social = [
         {
            name: 'FaSoundcloud',
            link: 'https://soundcloud.com/webroketheweather',
          },
          {
            name: 'FaInstagram',
            link: 'https://www.instagram.com/webroketheweather/',
          },
          {
            name: 'FaFacebook',
            link: 'https://facebook.com/webroketheweather',
          },

        ]
      
    

    return (
        <div>
            <h2>we broke the weather</h2>
            <small>
            <i>
                 <p>wbtw is:</p> 

                   <p>nick - keys, sax, flute, etc, vocals</p>
                  
                   <p>andy - drums, vocals, count-offs</p>
                 
                   <p>steve - bass, moog, brown notes</p>
                     
                   <p>scott - guitar, sax, vocals, garage banding</p>

                   <p>kev - guitar/loud noises</p></i>

                   <p><a className="email" href="mailto:webroketheweather@gmail.com">webroketheweather@gmail.com</a></p>
                 
           
                  </small>
          
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
         

        </div>
    )
}

export default About
