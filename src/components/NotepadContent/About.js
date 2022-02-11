import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebook, FaBandcamp } from 'react-icons/fa'

const Icons = { FaInstagram, FaFacebook, FaBandcamp };

const StyledItem = styled.li`
    display: inline;
    font-size: 28px;
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

            {/* <h4>debut album out now!</h4> */}
            <a href="https://webroketheweather.bandcamp.com?campaign=website" target="_blank" rel="noopener noreferrer">
            <img src='/wbtw-cover.jpg' alt='wbtw-cover' width='60%' ></img>
            </a> 
            <iframe title="wbtw-streams" width="60%" height="52" src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2F3bzzbq2pft9qh&theme=light" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" allow="clipboard-read; clipboard-write"></iframe>
 
            <small>
           
                 <p>wbtw is:</p> 
                 <i>
                   <p>nick - keys, sax, flute, etc, vocals</p>
                  
                   <p>andy - drums, vocals, count-ins</p>
                 
                   <p>steve - bass, moog, brown notes</p>
                     
                   <p>scott - guitar, sax, vocals, garage banding</p>

                   <p>kev - guitar/loud noises</p></i>



                   <p><a className="email" href="mailto:webroketheweather@gmail.com">webroketheweather@gmail.com</a></p>
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
