import React from 'react'
import styled from 'styled-components'
import { Modal, Frame } from '@react95/core'


const Wrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(4, 1fr);
	flex-wrap: wrap;
`;




function Space({ closeSpace, isMobile }) {

 

    return (
        <Modal
            icon="flying_through_space_100"
            title="space_invaders.exe"
            closeModal={closeSpace}
            style={{
                left: isMobile ? '5%' : '5%',
                top: '5%',
                width: isMobile ? '90%' : '80%',
                height: isMobile ? '90%' : '90%'
            }}
            buttons={[

                { value: 'Exit', onClick: closeSpace },
    
              ]}>
            <Frame>
                <Wrapper>
                <iframe
        src="https://spaceinvaders-phi.vercel.app/"
        frameBorder="0"
        title="space invaders"
        style={{
          display: 'block',
          width: '100%',
          height: isMobile ? '60vh' : '80vh',
          backgroundColor: 'rgb(192,192,192)',
        }}
      />
                </Wrapper>
            
            </Frame>
     

        </Modal>
        
    )
}

export default Space
