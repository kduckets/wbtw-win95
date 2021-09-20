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
                    <List.Item icon="mmsys_105">
                        <Link href='https://soundcloud.com/webroketheweather' target="_blank">soundcloud</Link>
                    </List.Item>
                    
                    <List.Item icon="progman_24">
                        <Link href='https://instagram.com/webroketheweather' target="_blank">instagram</Link>
                    </List.Item>   
                    <List.Divider />
                    <List.Item  icon="shell32_28">
                        <Link href=''>Shut Down...</Link>
                    </List.Item>   
                </List>
            }
        />
    )
}

export default Taskbar
