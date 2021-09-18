import React from 'react'
import { TaskBar, List } from '@react95/core'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`


function Taskbar() {
    return (
        <TaskBar
            list={
                <List>
                    <List.Item className="pointer" icon="cd_music">
                        <Link href='https://soundcloud.com/webroketheweather' target="_blank">Demos</Link>
                    </List.Item>
                    
                    <List.Item className="pointer" icon="brush">
                        <Link href='https://instagram.com/webroketheweather' target="_blank">Instagram</Link>
                    </List.Item>
                  
                  
                </List>
            }
        />
    )
}

export default Taskbar
