import React from 'react'
import { TaskBar, List } from '@react95/core'
import { NavLink } from "react-router-dom"
import './Taskbar.css'

const IconSprite = ({ name }) => (
    <i 
        style={{
            display: 'inline-block',
            width: '16px',
            height: '16px',
            backgroundImage: `url(https://raw.githubusercontent.com/React95/React95/master/packages/icons/src/icons/${name}.ico)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            verticalAlign: 'middle'
        }}
    />
)

function Taskbar({openExplorer, openPaint, openMine, openFloppy, openSpace, openSynth, openNotepad}) {
    return (
        <div className="taskbar-list">
            <TaskBar
                list={
                    <List>
                        <List.Item icon={<IconSprite name="folder_exe" />}>
                            <List>
                                <List.Item icon={<IconSprite name="mspaint" />} onClick={() => openPaint()}>
                                    Paint
                                </List.Item>
                                
                                <List.Item icon={<IconSprite name="winmine_1" />} onClick={() => openMine()}>
                                    Minesweeper
                                </List.Item>
                                
                                <List.Item icon={<IconSprite name="joy_102" />} onClick={() => openFloppy()}>
                                    Floppy Box
                                </List.Item>

                                <List.Item icon={<IconSprite name="flying_through_space_100" />} onClick={() => openSpace()}>
                                    Space Invaders
                                </List.Item>
                            </List>
                            Programs
                        </List.Item>
                        
                        <List.Item icon={<IconSprite name="folder_file" />} onClick={() => openExplorer()}>
                            Documents
                        </List.Item>
                        
                        <List.Item icon={<IconSprite name="settings" />}>
                            <List>
                                <List.Item icon={<IconSprite name="folder_settings" />} onClick={() => openSynth()}>
                                    Control Panel
                                </List.Item>
                            </List>
                            Settings
                        </List.Item>
                        
                        <List.Item icon={<IconSprite name="help_book" />} onClick={() => openNotepad({
                            id: 'credits',
                            name: 'credits',
                            icon: 'mmsys_90',
                        })}>
                            Help
                        </List.Item>
                        
                        <List.Item icon={<IconSprite name="loader_bat" />}>Run...</List.Item>
                        
                        <List.Divider />
                        
                        <List.Item icon={<IconSprite name="computer_3" />}>
                            <NavLink to="/404" style={{color:'inherit', textDecoration:'inherit'}}>
                                Shut Down...
                            </NavLink>
                        </List.Item>
                    </List>
                }
            />
        </div>
    )
}

export default Taskbar