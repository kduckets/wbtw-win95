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
                left: isMobile ? '5%' : '15%',
                top: '10%',
                width: isMobile ? '90%' : '80%',
                height: isMobile ? '90%' : '50%'
            }}
      >
            <Frame>
                <Wrapper>
                <iframe
        src="https://jspaint.app"
        frameBorder="0"
        title="paint"
        style={{
          display: 'block',
          width: '100%',
          minHeight: '400px',
          backgroundColor: 'rgb(192,192,192)',
        }}
      />
                </Wrapper>
            
            </Frame>
     

        </Modal>
        
    )
}

export default Paint
