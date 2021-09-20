import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Modal, Frame } from '@react95/core'
import Minesweeper from 'react-minesweeper';
import "react-minesweeper/lib/minesweeper.css";

const Wrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(4, 1fr);
	flex-wrap: wrap;
`;




function Mine({ closeMine, isMobile }) {
        const [seconds, setSeconds] = useState(0);
        const [isActive, setIsActive] = useState(true);
        const [message, setMessage] = useState('');
      
        function lose() {
          setIsActive(!isActive);
          setMessage(message=>'try again');
        }


        function win() {
            setIsActive(!isActive);
            setMessage(message=>'you win!');
          }
      
        // function reset() {
        //   setSeconds(0);
        //   setIsActive(false);
        // }
      
        useEffect(() => {
          let interval = null;
          if (isActive) {
            interval = setInterval(() => {
              setSeconds(seconds => seconds + 1);
            }, 1000);
          } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
          }
          return () => clearInterval(interval);
        }, [isActive, seconds]);
 

    return (
        <Modal
            icon="drvspace_7"
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
            onWin={() => win()}
            onLose={() => lose()}
            bombChance={0.15} // 15% chance that a field will contain a bomb
            width={10} // amount of fields horizontally
            height={10} // amount of fields vertically
            />
                </Wrapper>
            
            </Frame>
            <p>{seconds}</p>
            <p>{message}</p>

        </Modal>
        
    )
}

export default Mine
