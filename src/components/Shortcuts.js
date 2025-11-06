import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'  // <CHANGE> Changed from named import to default import
import {startWebamp} from '../utils/startWebamp';

const StyledShorcut = styled.div`
margin-left: 20px;
margin-top: 20px;
align-items: center !important;
color: white !important;
`;

function Shortcuts({openExplorer, openMine, openPaint, openNotepad, openFloppy, openSpace, items }) {
  return (
    <StyledShorcut>
      <Icon
        name="media_cd"
        onClick={() => startWebamp()}
      />
      music 
      
      {
        items.map((item) => (
          <Icon
            key={item.name}
            name="txt_icon"
            onClick={() => openNotepad(item)}
          />
          {item.name.replace(".txt","") } 
        ))
      }
    </StyledShorcut>
  )
}

export default Shortcuts