import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebook, FaSoundcloud, FaBandcamp } from 'react-icons/fa'

const Icons = { FaInstagram, FaFacebook, FaSoundcloud, FaBandcamp };

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
            name: 'FaBandcamp',
            link: 'https://webroketheweather.bandcamp.com?campaign=website',
          },
        
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

            <h4>album coming feb 11, 2022</h4>
            <a href="https://webroketheweather.bandcamp.com?campaign=website" target="_blank" rel="noopener noreferrer">
            <img src='/wbtw-cover.jpg' alt='wbtw-cover' width='50%' ></img>
            </a>
            <p>
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
                </p>
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
        
            <a href="https://membership.onlineaction.org/site/Donation2?df_id=19284&19284.donation=form1&addl_info=nav-button&conversion_pg=www.edf.org%2F&_ga=2.192113130.1549475860.1607045714-634390749.1607045714" 
              target="_blank" rel="noopener noreferrer">
              <button><small>fix the weather</small></button>
              </a>
              <br/>
              <br/>
              </div>  

        </div>
    )
}

export default About
