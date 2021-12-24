import React, { useState, useContext, useEffect } from 'react'
import Explorer from './Explorer'
import Notepad from './Notepad';
import DataContext from '../contexts/dataContext'
import Shortcuts from './Shortcuts';
import Player from './Player';
import Alert from '@react95/core/Alert';
import Mine from './Mine';
import Paint from './Paint';
import Floppy from './Floppy';
import Taskbar from './Taskbar';
import Synth from './Synth/Synth';



function Desktop() {

    const isMobile = window.innerWidth < 850;

    const data = useContext(DataContext);
    const [explorerOpened, toggleExplorer] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [notepadOpened, toggleNotepad] = useState(false);
    const [alertOpened, toggleAlert] = useState(false);
    const [mineOpened, toggleMine] = useState(false);
    const [paintOpened, togglePaint] = useState(false);
    const [floppyOpened, toggleFloppy] = useState(false);
    const [synthOpened, toggleSynth] = useState(false);




    const [items, setItems] = useState([]);

    useEffect(
        () => {
            const files = data.getItems();
            setItems(files);
            toggleExplorer(false);
            setSelectedItem(files[0]);
            toggleNotepad(true);
            toggleAlert(true);
            toggleMine(false);
            togglePaint(false);
            toggleFloppy(false);
            toggleSynth(false);
        }, [data, isMobile]);


    const closeExplorer = () => {
        toggleExplorer(false);
    };

    const openExplorer = () => {
        toggleExplorer(true);
    };

    const closeNotepad = () => {
        toggleNotepad(false);
    };
    const openNotepad = (item) => {
        setSelectedItem(item)
        toggleNotepad(true);
    };
    const closeAlert = () => {
        toggleAlert(false);
    };

    const closeMine = () => {
        toggleMine(false);
    };

    const openMine = () => {
        toggleMine(true);
    };

    const closePaint = () => {
        togglePaint(false);
    };

    const openPaint = () => {
        togglePaint(true);
    };

    const closeFloppy = () => {
        toggleFloppy(false);
    };

    const openFloppy = () => {
        toggleFloppy(true);
    };
    const closeSynth = () => {
        toggleSynth(false);
    };

    const openSynth = () => {
        toggleSynth(true);
    };

    return (
        
        <React.Fragment>
            <Shortcuts items={items} openNotepad={openNotepad} openExplorer={openExplorer} openMine={openMine} openPaint={openPaint} openFloppy={openFloppy} openSynth={openSynth}/>
            {
                explorerOpened && (
                    <Explorer items={items} closeExplorer={closeExplorer} openNotepad={openNotepad} isMobile={isMobile} />
                )
            }
            {
                notepadOpened && (
                    <Notepad closeNotepad={closeNotepad} selectedItem={selectedItem} isMobile={isMobile} />
                )
            }
            {
                 mineOpened && (
                    <Mine closeMine={closeMine} selectedItem={selectedItem} isMobile={isMobile} />
                )
            }
               {
                 paintOpened && (
                    <Paint closePaint={closePaint} selectedItem={selectedItem} isMobile={isMobile} />
                )
            }
                 {
                 floppyOpened && (
                    <Floppy closeFloppy={closeFloppy} selectedItem={selectedItem} isMobile={isMobile} />
                )
            }
                {
                 synthOpened && (
                    <Synth closeSynth={closeSynth} selectedItem={selectedItem} isMobile={isMobile} />
                )
            }
                {
                alertOpened && (
                    <Alert closeAlert={closeAlert} selectedItem={selectedItem} isMobile={isMobile} 
                    title="system failure.exe"
                    type='error'
                    message="fatal error: weather broken"
                    buttons={[{ value: 'OK', onClick: closeAlert }]}/>
                )
            }
            <Player />
            <Taskbar openExplorer={openExplorer} openMine={openMine} openPaint={openPaint} openFloppy={openFloppy} openSynth={openSynth}/>
        </React.Fragment>
        
    )
}

export default Desktop
