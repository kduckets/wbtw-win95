import React from 'react'
import styled from 'styled-components'
import { Modal, Frame } from '@react95/core'
import Minesweeper from 'react-minesweeper';
import "react-minesweeper/lib/minesweeper.css";
import Timer from 'react-compound-timer';

const Wrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(4, 1fr);
	flex-wrap: wrap;
`;


function Mine({ closeMine, isMobile }) {
    return (
        <Modal
            icon="earth"
            title="minesweeper"
            closeModal={closeMine}
            style={{
                left: isMobile ? '5%' : '15%',
                top: '10%',
                width: isMobile ? '90%' : 400,
            }}
            buttons={[

                { value: 'Exit', onClick: closeMine },
    
              ]}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] },
                { name: 'Help', list: [] },
            ]}>
            <Frame>
                <Wrapper>
                <Minesweeper
            onWin={() => console.log("GAME WON")}
            onLose={() => console.log("GAME LOST")}
            bombChance={0.15} // 15% chance that a field will contain a bomb
            width={10} // amount of fields horizontally
            height={10} // amount of fields vertically
            />
                </Wrapper>
            
            </Frame>

            <Timer>
	        <Timer.Seconds />
            </Timer>

        </Modal>
        
    )
}

export default Mine
