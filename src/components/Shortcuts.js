import React from 'react'
import styled from 'styled-components'
import { Icon } from './Icon' 
import {startWebamp} from '../utils/startWebamp';


const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
	align-items: center !important;
    color: white !important;
`;

function Shortcuts({openExplorer, openMine, openPaint, openNotepad, openFloppy, openSpace, items }) {

    return (
        <div>

            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="media_cd"
                    onClick={()=>startWebamp()}
                />
                <div>music</div>
            </StyledShorcut> 
     
     
            {
            items.map((item) => (
             <StyledShorcut key={item.id}>
                    <Icon
                className="pointer"
                name={item.icon}
                onClick={() => openNotepad(item)}
                     />
                    <div>{item.name.replace(".txt","") }</div>
            </StyledShorcut>
                ))
            }    
   
       
        </div>
    )
}

export default Shortcuts
