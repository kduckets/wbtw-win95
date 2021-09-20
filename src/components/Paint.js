import React from 'react'
import styled from 'styled-components'
import { Modal, Frame } from '@react95/core'


const Wrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(4, 1fr);
	flex-wrap: wrap;
`;




function Paint({ closePaint, isMobile }) {

 

    return (
        <Modal
            icon="mspaint"
            title="mspaint"
            closeModal={closePaint}
            style={{
                left: isMobile ? '5%' : '5%',
                top: '5%',
                width: isMobile ? '90%' : '80%',
                height: isMobile ? '86%' : '86%'
            }}
            buttons={[

                { value: 'Exit', onClick: closePaint },
    
              ]}>
            <Frame>
                <Wrapper>
                <iframe
        src="https://jspaint.app"
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

export default Paint
