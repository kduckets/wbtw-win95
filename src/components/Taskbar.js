import React from 'react'
import { TaskBar, List } from '@react95/core'
import '@react95/icons/icons.css';
import { NavLink } from "react-router-dom";


function Taskbar({openExplorer, openPaint, openMine, openFloppy, openSynth, openNotepad}) {
    return (
    
        <TaskBar
            list={
                <List>

                <List.Item icon="folder_exe">
            
                  <List>
            
                    {/* <List.Item icon="folder_exe">
            
                      Accessories
            
                    </List.Item> */}


                    <List.Item icon="mspaint" onClick={() => openPaint()}>
            
                      Paint
            
                    </List.Item>
          
            
                    <List.Item icon="winmine_1" onClick={() => openMine()}>
            
                      Minesweeper
            
                    </List.Item>
            
                    {/* <List.Item icon="ms_dos">
            
                      MS-DOS Prompt
            
                    </List.Item> */}
            
                    <List.Item icon="joy_102" onClick={() => openFloppy()}>
            
                      Floppy Box
            
                    </List.Item>
            
                    {/* <List.Item icon="windows_explorer"  onClick={() => openExplorer()}>
            
                      Windows Explorer
            
                    </List.Item> */}
            
                  </List>
            
                  Programs
            
                </List.Item>
            
                <List.Item icon="folder_file" onClick={() => openExplorer()}>
                  Documents
                  </List.Item>
            
                <List.Item icon="settings">
            
                  <List>
            
                    <List.Item icon="folder_settings" onClick={() => openSynth()}>
            
                      Control Panel
            
                    </List.Item>
            
                    {/* <List.Item icon="folder_print">
            
                      Printers
            
                    </List.Item> */}
            
                  </List>
            
                  Settings
            
                </List.Item>
            
                {/* <List.Item icon="file_find">Find</List.Item> */}

            
                <List.Item icon="help_book" onClick={() => openNotepad({
                id: 'credits',
                name: 'credits',
                icon: 'mmsys_90',
                 })}>Help</List.Item>
            
                <List.Item icon="loader_bat">Run...</List.Item>
            
                <List.Divider />
                <List.Item icon="computer_3">
                <NavLink to="/404" style={{color:'inherit', textDecoration:'inherit'}}> Shut Down... </NavLink>
                </List.Item>
              </List>
             
            }
        />
    )
}

export default Taskbar
