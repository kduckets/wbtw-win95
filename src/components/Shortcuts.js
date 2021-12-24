import React from 'react'
import styled from 'styled-components'
import { Icon } from '@react95/core'
import {startWebamp} from '../utils/startWebamp';


const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
	align-items: center !important;
    color: white !important;
`;

function Shortcuts({openExplorer, openMine, openPaint, openNotepad, openFloppy, items }) {

    return (
        <div>

            {
            items.map((item) => (
             <StyledShorcut key={item.id}>
                    <Icon
                className="pointer"
                name={item.icon}
                onClick={() => openNotepad(item)}
                     />
                    <div>{item.name}</div>
            </StyledShorcut>
                ))
            }     
                        { <StyledShorcut>
                <Icon
                    className="pointer"
                    name="media_cd"
                    onClick={()=>startWebamp()}
                />
                <div>demos</div>
            </StyledShorcut> }
     
       
        </div>
    )
}

export default Shortcuts
