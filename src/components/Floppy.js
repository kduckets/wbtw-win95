import React from 'react'
import styled from 'styled-components'
import { Modal, Frame } from '@react95/core'


const Wrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(4, 1fr);
	flex-wrap: wrap;
`;




function Floppy({ closeFloppy, isMobile }) {

 

    return (
        <Modal
            icon="joy_102"
            title="floppy box.exe"
            closeModal={closeFloppy}
            style={{
                left: isMobile ? '5%' : '5%',
                top: '5%',
                width: isMobile ? '90%' : '80%',
                height: isMobile ? '86%' : '90%'
            }}
            buttons={[

                { value: 'Exit', onClick: closeFloppy },
    
              ]}>
            <Frame>
                <Wrapper>
                <iframe
        src="https://floppy-box.vercel.app/tunes/demos"
        frameBorder="0"
        title="paint"
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

export default Floppy
