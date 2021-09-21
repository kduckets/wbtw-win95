import React, { useState, useContext, useEffect } from 'react'
import Explorer from './Explorer'
import Notepad from './Notepad';
import DataContext from '../contexts/dataContext'
import Shortcuts from './Shortcuts';
import Player from './Player';
import Alert from '@react95/core/Alert';
import Mine from './Mine';
import Paint from './Paint';


function Desktop() {

    const isMobile = window.innerWidth < 850;

    const data = useContext(DataContext);
    const [explorerOpened, toggleExplorer] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [notepadOpened, toggleNotepad] = useState(false);
    const [alertOpened, toggleAlert] = useState(false);
    const [mineOpened, toggleMine] = useState(false);
    const [paintOpened, togglePaint] = useState(false);


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


    return (
        
        <React.Fragment>

            <Shortcuts openExplorer={openExplorer} openMine={openMine} openPaint={openPaint}/>
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
                alertOpened && (
                    <Alert closeAlert={closeAlert} selectedItem={selectedItem} isMobile={isMobile} 
                    title="system failure.exe"
                    type='error'
                    message="fatal error: weather broken"
                    hasSound='true'
                    buttons={[{ value: 'OK', onClick: closeAlert }]}/>
                )
            }
            <Player />
        </React.Fragment>
    )
}

export default Desktop
