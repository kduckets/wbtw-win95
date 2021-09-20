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

function Shortcuts({ openExplorer, openMine, openPaint }) {
    return (
        <div>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="media_cd"
                    onClick={()=>startWebamp()}
                />
                <div>media</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="explorer_100"
                    onClick={() => openExplorer()}
                />
                <div>my computer</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="drvspace_7"
                    onClick={() => openMine()}
                />
                <div>minesweeper</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="mspaint"
                    onClick={() => openPaint()}
                />
                <div>paint</div>
            </StyledShorcut>
       
        </div>
    )
}

export default Shortcuts
