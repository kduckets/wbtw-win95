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
                width: '80%',
                height: '90%'
            }}
            buttons={[

                { value: 'Exit', onClick: closeFloppy },
    
              ]}>
            <Frame>
                <Wrapper>
                <iframe
        src="https://floppy-box.vercel.app/tunes/demos"
        frameBorder="0"
        title="floppy"
        style={{
          display: 'block',
          width: '90%',
          height: '80vh',
          backgroundColor: 'rgb(192,192,192)',
          position:'absolute'
        }}
      />
                </Wrapper>
            
            </Frame>
     

        </Modal>
        
    )
}

export default Floppy
